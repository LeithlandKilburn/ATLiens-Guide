package learn.atliens.repo;

import learn.atliens.model.Category;

import java.util.List;

public interface CategoryRepo {

    //CRUD

    // findAllCategories
    List<Category> findAllCategories();

    // findByName
    Category findByName(String name);

}
