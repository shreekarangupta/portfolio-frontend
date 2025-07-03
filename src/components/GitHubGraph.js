import React from "react";

export default function GitHubGraph({ username }) {
  const url = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`;

  return (
    <div style={{ flex: 1, minWidth: 280, textAlign: "center" }}>
      <h3 style={{ color: "var(--btn-bg)" }}>GitHub Stats</h3>
      <img
        src={url}
        alt="GitHub Stats"
        style={{ maxWidth: "100%", borderRadius: 10, boxShadow: "var(--shadow)" }}
      />
    </div>
  );
}
