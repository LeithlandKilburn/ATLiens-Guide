package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import learn.atliens.model.Category;
import learn.atliens.model.Word;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class CategoryFileRepo implements CategoryRepo{

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    @Override
    public List<Category> findAllCategories() {
        return new ArrayList<>();
    }

    @Override
    public Category findByName(String name)
    {
        return new Category();
    }
}
