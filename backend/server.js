
require("dotenv").config();

const app = require("./app");
const { testConnection, pool } = require("./config/database");

const PORT = Number(process.env.PORT) || 5000;

async function startServer() {
  try {
    await testConnection();

    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
      console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
    });

    server.on("error", (error) => {
      console.error("❌ Server error:", error.message);

      if (error.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use.`);
      }

      process.exitCode = 1;
    });
  } catch (error) {
    console.error("❌ Backend startup failed:", error.message);
    await pool.end().catch(() => {});
    process.exitCode = 1;
  }
}

startServer();
