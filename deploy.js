require('dotenv').config();  // Load environment variables from .env
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: parseInt(process.env.FTP_PORT),
    localRoot: __dirname + "/build",  // Path to the build folder
    remoteRoot: "/htdocs/",           // Target directory on InfinityFree
    include: ["*", "**/*"],           // Include all files in the build folder
    deleteRemote: true,               // Delete old files on the server before uploading
    forcePasv: true                   // Use passive mode for FTP connection
};

ftpDeploy.deploy(config)
    .then(res => console.log("✅ Deployment finished:", res))
    .catch(err => console.error("❌ Deployment error:", err));
