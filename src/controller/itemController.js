import { getAllItems, getItemById, createItem, updateItem, deleteItem } from '../services/itemService.js'; 

export async function getAllItemsHandler(req, res) { 
    const items = await getAllItems();
    res.status(200).json(items);
}

export async function getItemByIdHandler(req, res) {
    let id = parseInt(req.params.id);
    let item = await getItemById(id);
    res.status(200).json(item);
}

export async function createItemHandler(req, res) {
    const data = {
        name: req.body.name,
        price: req.body.price,
    };

    let newItem = await createItem(data);
    res.status(201).json(newItem);
}

export async function updateItemHandler(req, res) {
    let id = parseInt(req.params.id);
    const updates = {};
    if (req.body.name) updates.name = req.body.name;
    if (req.body.price) updates.price = req.body.price;

    const updatedItem = await updateItem(id, updates);
    res.status(200).json(updatedItem);
}

export async function deleteItemHandler(req, res) {
    let id = parseInt(req.params.id);
    await deleteItem(id);
    res.status(204).send();
}