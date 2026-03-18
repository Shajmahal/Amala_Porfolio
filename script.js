const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const overlay = document.getElementById("overlay");
const modalContent = document.getElementById("modalContent");

const projectData = {
  pcb: `
    <h2>PCB Design & Validation</h2>

    <p>
      This project focused on designing and evaluating a printed circuit board from the schematic stage through physical testing.
      The goal was to create a reliable hardware design while documenting design choices and debugging steps clearly.
    </p>

    <h4>Overview</h4>
    <p>
      A hardware-centered project focused on turning a board concept into a testable physical design.
      It involved moving from planning and component organization into validation and troubleshooting.
    </p>

    <h4>Tools Used</h4>
    <p>
      PCB design workflow, circuit planning, component layout, hardware debugging, and validation testing.
    </p>

    <h4>My Role</h4>
    <ul>
      <li>Worked through schematic and layout planning</li>
      <li>Organized board structure and component placement</li>
      <li>Tested board behavior and investigated issues</li>
      <li>Documented the validation and debugging process</li>
    </ul>

    <h4>Challenges</h4>
    <p>
      The main challenge was making sure the design remained practical and testable while identifying small issues that affected system behavior.
    </p>

    <h4>Result</h4>
    <p>
      The project strengthened my understanding of how design decisions affect hardware performance and how structured debugging improves the validation process.
    </p>

    <div class="projectLinks">
      <a class="projectLinkBtn" href="https://github.com/shajmahal" target="_blank">GitHub Repo</a>
    </div>
  `,

  firmware: `
    <h2>Embedded Firmware System</h2>

    <p>
      This project involved developing firmware for a system that interacts with sensors and supports real-time behavior.
      The focus was on building readable, reliable logic for embedded use.
    </p>

    <h4>Overview</h4>
    <p>
      An embedded systems project connecting software logic with hardware communication and data handling.
      It emphasized structure, reliability, and testing.
    </p>

    <h4>Tools Used</h4>
    <p>
      Embedded C/C++ concepts, firmware logic design, sensor interfacing, debugging workflow, and system testing.
    </p>

    <h4>My Role</h4>
    <ul>
      <li>Developed structured firmware logic</li>
      <li>Worked on sensor communication and handling input data</li>
      <li>Tested behavior and improved reliability</li>
      <li>Focused on clearer debugging and organization</li>
    </ul>

    <h4>Challenges</h4>
    <p>
      The biggest challenge was making the firmware behave consistently while keeping the logic readable and easier to troubleshoot.
    </p>

    <h4>Result</h4>
    <p>
      This project improved my understanding of embedded reliability, debugging flow, and the importance of writing maintainable firmware.
    </p>

    <div class="projectLinks">
      <a class="projectLinkBtn" href="https://github.com/shajmahal" target="_blank">GitHub Repo</a>
    </div>
  `,

  software: `
    <h2>Software Application Prototype</h2>

    <p>
      This project focused on building a modular software prototype with clean organization, readable structure, and clear documentation.
    </p>

    <h4>Overview</h4>
    <p>
      A software project aimed at creating an application structure that is easy to understand, present, and improve over time.
    </p>

    <h4>Tools Used</h4>
    <p>
      HTML, CSS, JavaScript, modular front-end structure, interface planning, and documentation.
    </p>

    <h4>My Role</h4>
    <ul>
      <li>Built a cleaner project structure</li>
      <li>Improved readability and organization</li>
      <li>Worked on interface presentation and clarity</li>
      <li>Documented design decisions and structure</li>
    </ul>

    <h4>Challenges</h4>
    <p>
      The main challenge was balancing simplicity with structure so the project stayed clean, readable, and easy to expand.
    </p>

    <h4>Result</h4>
    <p>
      The final prototype presented a stronger foundation for future development and showed the value of good architecture and documentation.
    </p>

    <div class="projectLinks">
      <a class="projectLinkBtn" href="https://github.com/shajmahal" target="_blank">GitHub Repo</a>
    </div>
  `
};

function openModal(projectKey) {
  if (!overlay || !modalContent) return;
  modalContent.innerHTML = projectData[projectKey] || "<p>Project details coming soon.</p>";
  overlay.classList.add("active");
}

function closeModal() {
  if (!overlay) return;
  overlay.classList.remove("active");
}

if (overlay) {
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

window.openModal = openModal;
window.closeModal = closeModal;
