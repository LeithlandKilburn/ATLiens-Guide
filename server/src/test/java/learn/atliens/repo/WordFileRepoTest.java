package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import learn.atliens.model.Word;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.verify;


import static org.junit.jupiter.api.Assertions.*;


@ComponentScan("learn.atliens")
@SpringBootTest
class WordFileRepoTest {

    @Autowired
    private WordFileRepo wordFileRepo;

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

        // Verify that the DynamoDBMapper's save method is called
//        verify(dynamoDBMapper).save(word);

        System.out.println("Test works!");
    }

    @Test
    void findAllWords() {
//        Word word1 = new Word();
//        word1.setName("Test");
//        word1.setDefinition("Test");
//        word1.setExample("Test");
//        word1.setVideoUrl("Test");
//        word1.setUseRating("Test");
//        word1.setCategory1Id("Test");
//        word1.setCategory2Id("Test");
//        word1.setCategory3Id("Test");
//
//        Word word2 = new Word();
//        word2.setName("Test2");
//        word2.setDefinition("Test2");
//        word2.setExample("Test2");
//        word2.setVideoUrl("Test2");
//        word2.setUseRating("Test2");
//        word2.setCategory1Id("Test2");
//        word2.setCategory2Id("Test2");
//        word2.setCategory3Id("Test2");
//
//        List<Word> expectedWords = new ArrayList<>();
//        expectedWords.add(word1);
//        expectedWords.add(word2);
//
//        when(dynamoDBMapper.scan(Word.class, new DynamoDBScanExpression())).thenReturn(expectedWords);
//
//        List<Word> actualWords = wordFileRepo.findAllWords();
//
//        assertEquals(expectedWords, actualWords);
//        verify(dynamoDBMapper).scan(Word.class, new DynamoDBScanExpression());
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