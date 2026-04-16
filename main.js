document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  // This portfolio is static (no backend). On submit we open the user's email client
  // with a pre-filled message.
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const phoneEl = document.getElementById("phone");
    const messageEl = document.getElementById("message");

    const name = (nameEl?.value || "").trim();
    const email = (emailEl?.value || "").trim();
    const phone = (phoneEl?.value || "").trim();
    const message = (messageEl?.value || "").trim();

    const to = "gmail-shubhanshumohan136@gmail.com";
    const subject = `Portfolio consultation request - ${name || "New inquiry"}`;
    const bodyLines = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Phone: ${phone || "-"}`,
      "",
      message || "-",
    ];

    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;

    window.location.href = mailto;
  });
});

