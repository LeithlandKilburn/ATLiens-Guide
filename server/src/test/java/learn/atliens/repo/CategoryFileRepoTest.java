package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import learn.atliens.model.Category;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;

import static org.junit.jupiter.api.Assertions.*;

@ComponentScan("learn.atliens")
@SpringBootTest
class CategoryFileRepoTest {

    @Autowired
    private CategoryFileRepo repo;

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    @Test
    public void shouldFindAllCats() {
        Category cat = new Category();
        cat.setName("Sad");
        repo.add(cat);

        assertEquals(5, repo.findAllCategories().size());
    }

    @Test
    public void shouldFindSad() {
        assertEquals("Angry", repo.findByName("Angry").getName());
    }

}