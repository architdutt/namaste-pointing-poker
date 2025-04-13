import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { db } from "../firebase";
import { ref, onValue, set, remove } from "firebase/database";

const fibonacciPoints = [
  "0",
  "0.5",
  "1",
  "2",
  "3",
  "5",
  "8",
  "13",
  "20",
  "40",
  "100",
  "?",
  "∞",
];

const VoteSession = () => {
  const { id: sessionId } = useParams();
  const baseUrl = window.location.origin + `/session/${sessionId}`;
  const location = useLocation();
  const participantName =
    new URLSearchParams(location.search).get("name") ||
    localStorage.getItem("participantName") ||
    "Anonymous";
  const navigate = useNavigate(); // hook for navigation

  const [selectedVote, setSelectedVote] = useState(null);
  const [allVotes, setAllVotes] = useState({});
  const [showVotes, setShowVotes] = useState(false);
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(baseUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // hide after 2 seconds
  };

  const handleNewSession = () => {
    navigate("/"); // navigate to the home page
  };

  useEffect(() => {
    // Save participant locally and register in DB
    localStorage.setItem("participantName", participantName);
    const participantRef = ref(
      db,
      `sessions/${sessionId}/participants/${participantName}`
    );
    set(participantRef, true);

    // Listen to votes
    const voteRef = ref(db, `sessions/${sessionId}/votes`);
    const votesUnsub = onValue(voteRef, (snapshot) => {
      const data = snapshot.val() || {};
      setAllVotes(data);
    });

    // Listen to participants
    const participantsRef = ref(db, `sessions/${sessionId}/participants`);
    const participantsUnsub = onValue(participantsRef, (snapshot) => {
      const data = snapshot.val() || {};
      setTotalParticipants(Object.keys(data).length);
    });

    // Cleanup
    return () => {
      votesUnsub();
      participantsUnsub();
    };
  }, [participantName, sessionId]);

  const handleVote = (point) => {
    setSelectedVote(point);
    const voteRef = ref(db, `sessions/${sessionId}/votes/${participantName}`);
    set(voteRef, point);
  };

  const handleClear = () => {
    setSelectedVote(null);
    setShowVotes(false);
    const sessionVotesRef = ref(db, `sessions/${sessionId}/votes`);
    remove(sessionVotesRef);
  };

  const handleReveal = () => {
    setShowVotes(true);
  };

  const voteCount = Object.keys(allVotes).length;
  const totalVotes = Object.values(allVotes);
  const avg =
    totalVotes.length > 0
      ? totalVotes
          .filter((v) => !isNaN(v))
          .reduce((acc, curr) => acc + parseFloat(curr), 0) /
        totalVotes.filter((v) => !isNaN(v)).length
      : null;
  const progressPercent =
    totalParticipants > 0
      ? Math.min((voteCount / totalParticipants) * 100, 100)
      : 0;

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto p-4 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-center">Session: {sessionId}</h2>
        <p className="text-lg text-center">
          Welcome, <strong>{participantName}</strong>
        </p>

        {/* Voting Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold mb-4">Vote</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {fibonacciPoints.map((point) => (
              <button
                key={point}
                className={`px-4 py-2 rounded-full border ${
                  selectedVote === point
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                }`}
                onClick={() => handleVote(point)}
              >
                {point}
              </button>
            ))}
          </div>
        </div>

        {/* Voting Status Card */}
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl text-center">
          <h4 className="text-md font-medium mb-2">Votes Casted: {voteCount}</h4>
          <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleClear}
              className="bg-amber-900 text-white px-4 py-2 rounded-xl"
            >
              Clear Votes
            </button>
            <button
              onClick={handleReveal}
              className="bg-emerald-700 text-white px-4 py-2 rounded-xl"
            >
              Show Votes
            </button>
          </div>
        </div>

        {/* Summary */}
        {showVotes && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h4 className="text-lg font-bold mb-4">Votes Summary</h4>
            {Object.entries(allVotes).map(([name, vote]) => (
              <p key={name}>
                <strong>{name}:</strong> {vote}
              </p>
            ))}
            <p className="mt-4 font-medium">
              <strong>Average:</strong>{" "}
              {avg ? avg.toFixed(2) : "N/A"}
            </p>
          </div>
        )}

        {/* Invite Link */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center">
          <h4 className="text-lg font-semibold mb-2">Invite</h4>
          <div className="flex justify-center items-center gap-2 relative">
            <input
              value={baseUrl}
              readOnly
              className="border p-2 rounded-md w-full max-w-md text-gray-800 dark:text-white dark:bg-gray-700"
            />

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="bg-blue-600 text-white px-3 py-2 rounded-md"
              >
                Copy
              </button>

              {copied && (
                <span className="text-lime-500 text-sm animate-fade">
                  Copied!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* New Session Button */}
        <div className="text-center">
          <button
            onClick={handleNewSession}
            className="bg-green-600 text-white px-4 py-2 rounded-3xl hover:bg-green-700"
          >
            Start a New Session
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default VoteSession;
