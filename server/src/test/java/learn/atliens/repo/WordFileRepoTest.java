package learn.atliens.repo;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.dynamodbv2.model.*;
import learn.atliens.model.Word;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import static org.junit.jupiter.api.Assertions.assertEquals;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@ComponentScan("learn.atliens")
@SpringBootTest
class WordFileRepoTest {

    @Autowired
    private WordFileRepo wordFileRepo;

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    @Test
    void addWord() {
        Word word = new Word();
        word.setName("Test");
        word.setDefinition("Test");
        word.setExample("Test");
        word.setVideoUrl("Test");
        word.setUseRating("Test");
        word.setCategory1Id("Test");
        word.setCategory2Id("Test");
        word.setCategory3Id("Test");
        System.out.println(word);

        wordFileRepo.addWord(word);
        assertEquals(word.getName(), "Test");

        System.out.println("Add Test works!");
    }

    @Test
    void findAllWords() {
        Word word1 = new Word();
        word1.setName("Test");
        word1.setDefinition("Test");
        word1.setExample("Test");
        word1.setVideoUrl("Test");
        word1.setUseRating("Test");
        word1.setCategory1Id("Test");
        word1.setCategory2Id("Test");
        word1.setCategory3Id("Test");

        Word word2 = new Word();
        word2.setName("Test2");
        word2.setDefinition("Test2");
        word2.setExample("Test2");
        word2.setVideoUrl("Test2");
        word2.setUseRating("Test2");
        word2.setCategory1Id("Test2");
        word2.setCategory2Id("Test2");
        word2.setCategory3Id("Test2");

        List<Word> expectedWords = new ArrayList<>();
        expectedWords.add(word1);
        expectedWords.add(word2);
        System.out.println(expectedWords);

        List<Word> actualWords = wordFileRepo.findAllWords();
        System.out.println(actualWords);

        assertEquals(expectedWords.get(0).getName(), actualWords.get(0).getName());
        System.out.println("Find All Test works!");
    }

    @Test
    void findWordById() {
    }

    @Test
    void updateWord() {
    }

    @Test
    void deleteWordById() {
    }
}