import express from "express";
import Book from "../models/bookModel.js";   // ✅ matches exact filename

const router = express.Router();

// CREATE NEW BOOK
router.post("/", async (req, res) => {
  try {
    console.log("📩 Incoming data:", req.body);

    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      return res.status(400).json({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const book = await Book.create({ title, author, publishYear });
    return res.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// GET ALL BOOKS
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// GET ONE BOOK
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// UPDATE BOOK
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).json({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const result = await Book.findByIdAndUpdate(id, { title, author, publishYear });
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// DELETE BOOK
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Book not found!" });
    }
    return res.status(200).json({ message: "Book deleted successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

export default router;
