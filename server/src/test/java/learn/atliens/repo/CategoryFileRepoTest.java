package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;

import static org.junit.jupiter.api.Assertions.*;

@ComponentScan("learn.atliens")
@SpringBootTest
class CategoryFileRepoTest {

    @Autowired
    private CategoryFileRepo categoryFileRepo;

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

}