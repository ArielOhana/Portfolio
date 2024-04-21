const Data = require("../models/dataModal");
const utils = require("../utilities");
exports.addVisit = async (req, res) => {
  const parsedDate = new Date();
  const formattedDateString = utils.formatDate(parsedDate);

  try {
    let data = await Data.findOne({ date: formattedDateString });

    if (data) {
      data.visits.push(parsedDate);
      await data.save();
    } else {
      data = new Data({
        date: formattedDateString,
        visits: [parsedDate],
      });
      await data.save();
    }
    res.status(200).json({ message: "Visit added successfully" });
  } catch (err) {
    console.error("Error adding visit:", err);
    res.status(500).json({ error: "Failed to add visit" });
  }
};
exports.SendEmail = async (req, res) => {
  let { subject, text,email,name } = req.body;
  const parsedDate = new Date();
  const formattedDateString = utils.formatDate(parsedDate);
  text = `You recieved Email from your Portfolio: \nSent by ${name} : ${email}\n${text}`
  try {
    let savedInDB = false;
    let sentToEmail = false;
    let data = await Data.findOne({ date: formattedDateString });

    if (data) {
      data.emails.push({ subject, text });
      await data.save();
    } else {
      data = new Data({
        date: formattedDateString,
        emails: [{ subject, text }],
      });
      await data.save();
    }
    savedInDB = true;
    sentToEmail = await utils.sendEmail(subject, text);

    res.status(200).json({ email: sentToEmail, saved: savedInDB });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
};
exports.InteractProject = async (req, res) => {
  const { projectNumber, type, projectName } = req.body;
  const parsedDate = new Date();
  const formattedDateString = utils.formatDate(parsedDate);
  try {
    let data = await Data.findOne({ date: formattedDateString });

    if (!data) {
      const projectsInteraction = [];

      for (let i = 0; i <= projectNumber; i++) {
        projectsInteraction[i] = projectsInteraction[i] || {};
      }

      projectsInteraction[projectNumber] = { [type]: 1, projectName };

      data = new Data({
        date: formattedDateString,
        projectsInteraction,
      });

      await data.save();
    } else {
      data.projectsInteraction = data.projectsInteraction || [];

      for (let i = 0; i <= projectNumber; i++) {
        data.projectsInteraction[i] = data.projectsInteraction[i] || {};
        data.projectsInteraction[i].projectName = projectName;
      }

      if (!data.projectsInteraction[projectNumber]) {
        data.projectsInteraction[projectNumber] = {};
      }

      data.projectsInteraction[projectNumber][type] = data.projectsInteraction[projectNumber][type] || 0;
      data.projectsInteraction[projectNumber][type]++;

      await data.save();
    }

    res.status(200).json({ message: "Interaction added successfully" });
  } catch (err) {
    console.error("Error adding interaction:", err);
    res.status(500).json({ error: "Failed to add interaction" });
  }
};

