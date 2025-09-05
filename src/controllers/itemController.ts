import { Request, Response, NextFunction } from "express";
import { items } from "../models/data";
import { Item } from "../models/item";

// Get all items
export const getAllItems = (req: Request, res: Response) => {
  res.json({ status: "success", data: items });
};

// Get item by ID
export const getItemById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ status: "error", message: "Item not found" });
  res.json({ status: "success", data: item });
};

// Add new item
export const addItem = (req: Request, res: Response) => {
  const { name, quantity } = req.body;
  if (!name || !quantity) return res.status(400).json({ status: "error", message: "Name and quantity are required" });

  const newItem: Item = {
    id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
    name,
    quantity,
    purchased: false
  };
  items.push(newItem);
  res.status(201).json({ status: "success", data: newItem });
};

// Update item
export const updateItem = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ status: "error", message: "Item not found" });

  const { name, quantity, purchased } = req.body;
  if (name !== undefined) item.name = name;
  if (quantity !== undefined) item.quantity = quantity;
  if (purchased !== undefined) item.purchased = purchased;

  res.json({ status: "success", data: item });
};

// Delete item
export const deleteItem = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ status: "error", message: "Item not found" });

  items.splice(index, 1);
  res.status(204).send();
};
