module.exports = {
    editorTheme: {
        page: {
            title: "FIS",
        }
    },
    adminAuth: {
        type: "credentials",
        users: [{
            username: "fis",
            password: "$2a$08$kjZA6I8imGRbv5AiCMAQe.hPwq1HQBQtq0NO.TbJWS4XpUWaOu8Hi",
            permissions: "*",
        }],
        default: {
            permissions: "read"
        }
    }
};
