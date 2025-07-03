import React from "react";

function LeetCodeGraph({ username }) {
  return (
    <div>
      <h3 style={{ textAlign: "center", marginBottom: "0.5rem" }}>LeetCode Graph</h3>
      <img
        src={`https://leetcard.jacoblin.cool/${username}?theme=dark&ext=contest`}
        alt="LeetCode Stats"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}

export default LeetCodeGraph;


// import React from "react";

// export default function LeetCodeGraph({ username }) {
//   const url = `https://leetcode-stats.vercel.app/${username}?theme=dark&hide=ranking`;

//   return (
//     <div style={{ flex: 1, minWidth: 280, textAlign: "center" }}>
//       <h3 style={{ color: "var(--btn-bg)" }}>LeetCode Stats</h3>
//       <img
//         src={url}
//         alt="LeetCode Stats"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = "/images/leetcode-fallback.png"; // fallback image if needed
//         }}
//         style={{ maxWidth: "100%", borderRadius: 10, boxShadow: "var(--shadow)" }}
//       />
//     </div>
//   );
// }
