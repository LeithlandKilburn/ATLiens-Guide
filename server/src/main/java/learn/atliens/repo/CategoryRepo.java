package learn.atliens.repo;

import learn.atliens.model.Category;
import learn.atliens.model.Word;

import java.util.List;

public interface CategoryRepo {

    //CRUD

    // findAllCategories
    List<Category> findAllCategories();

    // findByName
    Category findByName(String name);

}
