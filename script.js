function processETL() {
  const fileInput = document.getElementById('csvFile');
  const status = document.getElementById('status');

  if (!fileInput.files.length) {
    alert("Please upload a CSV file.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const csvData = event.target.result;

    // Save it to a file (manually or by copying to your Python script)
    fetch('save_csv.py', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: csvData
    });

    status.textContent = "✅ CSV uploaded! Now run the Python script.";
  };

  reader.readAsText(file);
}
