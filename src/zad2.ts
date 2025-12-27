type AppConfig = {
    database?: {
        connection?: {
            host: string;
            port: number;
        }
    }
    API?: {
        apiKey: string;
    }
    logging?: {
        loggingKey: string;
    }
}

function initializeApp(config: AppConfig | null) {
    console.log("Zapisanie ustawienia: ");
    console.log("host: " + (config?.database?.connection?.host || "wartość domyślna"));
    console.log("port: " + (config?.database?.connection?.port || "wartość domyślna"));
    console.log("apiKey: " + (config?.API?.apiKey || "wartość domyślna"));
    console.log("loggingKey: " + (config?.logging?.loggingKey || "wartość domyślna"));
}

initializeApp({
    database: {
        connection: {
            host: "asgsaasf",
            port: 12423,
        }
    },
    logging: {
        loggingKey: "bobobobo",
    }
});