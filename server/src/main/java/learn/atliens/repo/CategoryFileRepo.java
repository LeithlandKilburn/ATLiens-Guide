package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import learn.atliens.model.Category;
import learn.atliens.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class CategoryFileRepo implements CategoryRepo{

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    @Override
    public List<Category> findAllCategories() {
        return dynamoDBMapper.scan(Category.class, new DynamoDBScanExpression());
    }

    @Override
    public Category findByName(String name) {
        return findAllCategories().stream().filter(cat -> cat.getName().equals(name)).findFirst().orElse(null);
    }

    @Transactional
    public Category add(Category cat){
        System.out.println("Hits save method");
        dynamoDBMapper.save(cat);
        return cat;
    }
}
