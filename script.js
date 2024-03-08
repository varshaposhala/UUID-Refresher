import { v4 } from "./node_modules/uuid/dist/esm-browser/index.js";
console.log("hello");
document.getElementById("process").addEventListener("click", onProcess);
document.getElementById("file1").addEventListener("click", handleFile);
function handleFile() {
   
    const fileInput = document.getElementById('fileInput');
    const jsonOutput = document.getElementById('jsonOutput');

    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });

        // Assuming the first sheet is the target sheet
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet data to JSON
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        // Display JSON in the textarea
        jsonOutput.value = JSON.stringify(jsonData, null, 2);
      };

      reader.readAsBinaryString(file);
    } else {
      alert('Please select a file.');
    }
}
function onProcess() {
   
    const uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g;

    // Function to replace all occurrences of UUID with a new one
    function replaceUUID(match) {
        return v4();  // Generate a new UUID for each match
    }

    // Get the original content from the textarea
    const originalContent = document.getElementById("jsonOutput").value;

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

