function generateNotes() {

    const title = document.getElementById("meetingTitle").value;
    const date = document.getElementById("meetingDate").value;
    const participants = document.getElementById("participants").value;
    const discussion = document.getElementById("discussion").value;
    const decisions = document.getElementById("decisions").value;
    const actions = document.getElementById("actionItems").value;
    const additional = document.getElementById("additionalNotes").value;

    if (!title || !date) {
        alert("Please enter the meeting title and date.");
        return;
    }

    document.getElementById("previewTitle").textContent = title;
    document.getElementById("previewDate").textContent = date;
    document.getElementById("previewParticipants").textContent =
        participants || "Not specified";

    document.getElementById("previewDiscussion").textContent =
        discussion || "No discussion points recorded.";

    document.getElementById("previewDecisions").textContent =
        decisions || "No decisions recorded.";

    document.getElementById("previewActions").textContent =
        actions || "No action items recorded.";

    document.getElementById("previewAdditional").textContent =
        additional || "No additional notes.";

    document.getElementById("notesPreview").classList.remove("hidden");

    document.getElementById("notesPreview")
        .scrollIntoView({ behavior: "smooth" });
}


function downloadPDF() {

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    const title = document.getElementById("meetingTitle").value;
    const date = document.getElementById("meetingDate").value;
    const participants = document.getElementById("participants").value;
    const discussion = document.getElementById("discussion").value;
    const decisions = document.getElementById("decisions").value;
    const actions = document.getElementById("actionItems").value;
    const additional = document.getElementById("additionalNotes").value;

    let y = 20;

    pdf.setFontSize(20);
    pdf.text("Meeting Notes", 20, y);

    y += 15;

    pdf.setFontSize(12);

    pdf.text(`Meeting Title: ${title}`, 20, y);
    y += 10;

    pdf.text(`Date: ${date}`, 20, y);
    y += 10;

    pdf.text(`Participants: ${participants}`, 20, y);
    y += 15;

    pdf.setFontSize(14);
    pdf.text("Discussion Points", 20, y);
    y += 8;

    pdf.setFontSize(11);

    let lines = pdf.splitTextToSize(discussion || "None", 170);
    pdf.text(lines, 20, y);
    y += lines.length * 6 + 10;

    pdf.setFontSize(14);
    pdf.text("Decisions Made", 20, y);
    y += 8;

    pdf.setFontSize(11);

    lines = pdf.splitTextToSize(decisions || "None", 170);
    pdf.text(lines, 20, y);
    y += lines.length * 6 + 10;

    pdf.setFontSize(14);
    pdf.text("Action Items", 20, y);
    y += 8;

    pdf.setFontSize(11);

    lines = pdf.splitTextToSize(actions || "None", 170);
    pdf.text(lines, 20, y);
    y += lines.length * 6 + 10;

    pdf.setFontSize(14);
    pdf.text("Additional Notes", 20, y);
    y += 8;

    pdf.setFontSize(11);

    lines = pdf.splitTextToSize(additional || "None", 170);
    pdf.text(lines, 20, y);

    pdf.save("meeting-notes.pdf");
}