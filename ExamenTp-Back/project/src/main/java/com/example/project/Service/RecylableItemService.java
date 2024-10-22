package com.example.project.Service;

import com.example.project.Entity.RecyclableItem;
import com.example.project.Reposiroty.RecylableItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class RecylableItemService {

    private final RecylableItemRepository recycledItemRepository ;

    @Autowired
    public RecylableItemService(RecylableItemRepository recycledItemRepository) {
        this.recycledItemRepository = recycledItemRepository;
    }

    public List<RecyclableItem> getAllItems() {
        return recycledItemRepository.findAll();
    }

    public RecyclableItem addItemToBeRecycled(RecyclableItem item) {
        item.setRecycledDate(LocalDate.now());
        return recycledItemRepository.save(item);
    }

    public List<RecyclableItem> getRecyclableItemNoDate(){
       return  recycledItemRepository.findByRecycledDateIsNull();
    }
    public void saveItem(RecyclableItem recyclableItem){
        recycledItemRepository.save(recyclableItem);
    }
    public void deleteItem(Long id) {
        recycledItemRepository.deleteById(id);
    }
}
