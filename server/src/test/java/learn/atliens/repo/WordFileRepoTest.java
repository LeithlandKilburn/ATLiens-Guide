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
import static org.junit.jupiter.api.Assertions.assertNull;


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
        word.setUseRating(1);
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
        word1.setUseRating(1);

        Word word2 = new Word();
        word2.setName("Test2");
        word2.setDefinition("Test2");
        word2.setExample("Test2");
        word2.setVideoUrl("Test2");
        word2.setUseRating(1);

        List<Word> expectedWords = new ArrayList<>();
        expectedWords.add(word1);
        expectedWords.add(word2);

        List<Word> actualWords = wordFileRepo.findAllWords();

        assertEquals(expectedWords.get(0).getName(), actualWords.get(0).getName());
        System.out.println("Find All Test works!");
    }

    @Test
    void findWordByName() {
        Word word1 = new Word();
        word1.setName("Test");
        word1.setDefinition("Test");
        word1.setExample("Test");
        word1.setVideoUrl("Test");
        word1.setUseRating(1);

        wordFileRepo.addWord(word1);

        Word foundWord = wordFileRepo.findWordByName("Test");
        assertEquals(foundWord.getName(), "Test");
        System.out.println("Find Word By Name Test works!");
    }

    @Test
    void findByCategory() {
        Word word1 = new Word();
        word1.setName("Test");
        word1.setDefinition("Test");
        word1.setExample("Test");
        word1.setVideoUrl("Test");
        word1.setCategories("Testing");
        word1.setUseRating(1);

        Word word2 = new Word();
        word2.setName("Test");
        word2.setDefinition("Test");
        word2.setExample("Test");
        word2.setVideoUrl("Test");
        word2.setCategories("Testing");
        word2.setUseRating(1);

        wordFileRepo.addWord(word1);
        wordFileRepo.addWord(word2);

        List<Word> foundWordsByCategory = wordFileRepo.findWordsByCategory("Testing");
        assertEquals(2, foundWordsByCategory.size());
    }

    @Test
    void shouldUpdateWord() {
        Word word1 = new Word();
        word1.setWordId("1");
        word1.setName("Test");
        word1.setDefinition("Test");
        word1.setExample("Test");
        word1.setVideoUrl("Test");
        word1.setUseRating(1);

        wordFileRepo.addWord(word1);

        Word updatedWord = new Word();
        updatedWord.setWordId("1");
        updatedWord.setName("Test");
        updatedWord.setDefinition("Test");
        updatedWord.setExample("Test");
        updatedWord.setVideoUrl("Test");
        updatedWord.setUseRating(1);

        String updateMessage = wordFileRepo.updateWord("1", updatedWord);
        assertEquals("Word Updated!", updateMessage);

        Word updatedWordFindBy = wordFileRepo.findWordByName("Test");
        assertEquals(word1.getName(), updatedWord.getName());
    }

    @Test
    void deleteWordById() {
        Word word1 = new Word();
        word1.setWordId("1");
        word1.setName("Test");
        word1.setDefinition("Test");
        word1.setExample("Test");
        word1.setVideoUrl("Test");
        word1.setUseRating(1);

        wordFileRepo.addWord(word1);

        String deleteMessage = wordFileRepo.deleteWordById("1");
        assertEquals( "Word Deleted!", deleteMessage);

        Word deletedWord = dynamoDBMapper.load(Word.class, word1.getWordId());
        assertNull(deletedWord);
    }
}