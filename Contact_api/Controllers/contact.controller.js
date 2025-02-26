import Contact from "../Models/contact.model.js";

//Create new contact
export const newContactController = async (req, res) => {
  const { name, email, phone, type } = req.body;

  try {
    if (!name || !email || !phone || !type) {
      return res.json({ message: "All fields are required" });
    }

    let saveContact = await Contact.create({
      name,
      email,
      phone,
      type,
      user: req.user,
    });
    return res.json({ message: "Contact saved Successfully", saveContact });
  } catch (error) {
    console.log("Error in user contact controller", error);
    res.status(400).json({ message: "Error in contact controller" });
  }
};

//get all contacts
export const getAllContactController = async (req, res) => {
  try {
    const userContact = await Contact.find();
    if (!userContact)
      return res.status(400).json({ message: "Contact doesn't exist" });
    return res
      .status(200)
      .json({ message: "All Contacts fetched", userContact });
  } catch (error) {
    console.log("Error in user getallcontact controller", error);
    res.status(400).json({ message: "Error in getallcontact controller" });
  }
};

//get Contact by id

export const getContactById = async (req, res) => {
  try {
    const id = req.params.id;

    const userContact = await Contact.findById(id);
    if (!userContact) return res.status(400).json({ message: "id not found" });

    return res.status(200).json({ message: "user found", userContact });
  } catch (error) {
    console.log("Error in user getcontactbyid controller", error);
    res.status(400).json({ message: "Error in getcontactbyid controller" });
  }
};

//get Contact by user id

export const getContactByUserId = async (req, res) => {
  try {
    const id = req.params.id;

    const userContact = await Contact.find({ user: id });
    if (!userContact)
      return res.status(400).json({ message: "No contact found" });

    return res
      .status(200)
      .json({ message: "user specific contact found", userContact });
  } catch (error) {
    console.log("Error in user getcontactbyid controller", error);
    res.status(400).json({ message: "Error in getcontactbyid controller" });
  }
};

//update contact by id

export const updateContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, phone, type } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        type,
      },
      { new: true }
    );
    if (!updatedContact)
      return res.status(400).json({ message: "Contact not found" });

    return res.status(200).json({ message: "user found", updatedContact });
  } catch (error) {
    console.log("Error in user updateContactById controller", error);
    res.status(500).json({ message: "Error in server" });
  }
};

//delete contact by id

export const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedContact = await Contact.findByIdAndDelete(id);

    return res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    console.log("Error in user updateContactById controller", error);
    res.status(500).json({ message: "Error in server" });
  }
};
