import { v4 } from "./node_modules/uuid/dist/esm-browser/index.js";

document.getElementById("process").addEventListener("click", onProcess);

function onProcess() {
    const uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g;

    // Function to replace all occurrences of UUID with a new one
    function replaceUUID(match) {
        return v4();  // Generate a new UUID for each match
    }

    // Get the original content from the textarea
    const originalContent = document.getElementById("input1").value;

    // Ensure there is input
    if (!originalContent) {
        alert("Invalid input");
        return;
    }

    // Replace all UUIDs in the content with a new UUID for each match
    const modifiedContent = originalContent.replace(uuidRegex, replaceUUID);

    // Set the modified content to the output textarea
    document.getElementById("output1").value = modifiedContent;
}
