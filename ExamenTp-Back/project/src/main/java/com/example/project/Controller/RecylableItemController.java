package com.example.project.Controller;

import com.example.project.Entity.RecyclableItem;
import com.example.project.Entity.RecyclableItemDto.RecyclableItemDto;
import com.example.project.Service.RecylableItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping("/api/recylable-item")
public class RecylableItemController {
    private final RecylableItemService recycledItemService ;

    @Autowired
    public RecylableItemController(RecylableItemService recycledItemService) {
        this.recycledItemService = recycledItemService;
    }

    @GetMapping("/items")
    public List<RecyclableItem> getAllItems() {
        return recycledItemService.getAllItems();
    }
    @GetMapping("/items-without-recycling-schedule")
    public List<RecyclableItem> getRecyclableItemNoDate(){
        return recycledItemService.getRecyclableItemNoDate();
    }

    @PostMapping("/items")
    public ResponseEntity<String> addItem(@RequestBody RecyclableItemDto item) {
        try {
            // Validate input
            if (item.getItemName() == null || item.getItemName().isEmpty()) {
                return ResponseEntity.badRequest().body("Item name is required.");
            }
            if (item.getMaterialType() == null || item.getMaterialType().isEmpty()) {
                return ResponseEntity.badRequest().body("Material type is required.");
            }

            // Map DTO to Entity
            RecyclableItem recyclableItem = new RecyclableItem();
            recyclableItem.setItemName(item.getItemName());
            recyclableItem.setMaterialType(item.getMaterialType());

            // Save the item
            recycledItemService.saveItem(recyclableItem);

            return ResponseEntity.ok("Item successfully added.");

        } catch (Exception e) {
            // Log the error for debugging purposes
            e.printStackTrace();

            // Return a 500 Internal Server Error with a meaningful message
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while adding the item.");
        }
    }


    @DeleteMapping("/items/{id}")
    public void deleteItem(@PathVariable Long id) {
        recycledItemService.deleteItem(id);
    }
}
