import { useEffect } from 'react';

export default function ElevenLabsTalkAgent() {
    useEffect(() => {
        // Load script dynamically only once
        const scriptId = "elevenlabs-convai-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://elevenlabs.io/convai-widget/index.js";
            script.async = true;
            script.type = "text/javascript";
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div>
            <elevenlabs-convai agent-id="1eo2Jnnf9mmvgRAVIrSY"></elevenlabs-convai>
        </div>
    );
}
