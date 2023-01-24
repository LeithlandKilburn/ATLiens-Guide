package learn.atliens.domain;

import learn.atliens.model.Word;
import learn.atliens.repo.WordFileRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import java.util.ArrayList;
import java.util.List;


@SpringBootTest
@AutoConfigureMockMvc
class WordServiceTest {

    @MockBean
    WordFileRepo wordFileRepo;

    @Autowired
    WordService wordService;


    @Test
    void shouldAddWordWhenValid() {
        // Arrange
        Word wordIn = new Word();
        wordIn.setWordId("1");
        wordIn.setName("Test");
        wordIn.setDefinition("Test");
        wordIn.setExample("Test");
        wordIn.setVideoUrl("Test");
        wordIn.setCategories("Service Test");
        wordIn.setUseRating(1);

        Word wordOut = new Word();
        wordOut.setWordId("2");
        wordOut.setName("Test");
        wordOut.setDefinition("Test");
        wordOut.setExample("Test");
        wordOut.setVideoUrl("Test");
        wordOut.setCategories("Service Test");
        wordOut.setUseRating(1);

        when(wordFileRepo.addWord(wordIn)).thenReturn(wordOut);

        // Act
        Result<Word> result = wordService.addWord(wordIn);

        // Assert
        assertEquals(wordOut, result.getPayload());
    }

    @Test
    void shouldNotAddWordWhenValidationsFail() {
        // Arrange
        Word wordIn = new Word();
        wordIn.setWordId(null);
        wordIn.setName(null);
        wordIn.setDefinition(null);
        wordIn.setExample(null);
        wordIn.setVideoUrl("Test");
        wordIn.setCategories(null);
        wordIn.setUseRating(6);

        Word wordOut = new Word();
        wordOut.setWordId(null);
        wordOut.setName(null);
        wordOut.setDefinition(null);
        wordOut.setExample(null);
        wordOut.setVideoUrl("Test");
        wordOut.setCategories(null);
        wordOut.setUseRating(6);

        when(wordFileRepo.addWord(wordIn)).thenReturn(wordOut);

        // Act
        Result<Word> result = wordService.addWord(wordIn);

        // Assert
        assertFalse(result.isSuccess());
    }

    @Test
    void shouldFindAllWords() {
        // Arrange
        Word word1 = new Word();
        word1.setWordId("1");
        word1.setName("Test");
        word1.setDefinition("Test");
        word1.setExample("Test");
        word1.setVideoUrl("Test");
        word1.setCategories("Service Test");
        word1.setUseRating(1);

        Word word2 = new Word();
        word2.setWordId("2");
        word2.setName("Test");
        word2.setDefinition("Test");
        word2.setExample("Test");
        word2.setVideoUrl("Test");
        word2.setCategories("Service Test");
        word2.setUseRating(1);

        List<Word> allWords = new ArrayList<>();
        allWords.add(word1);
        allWords.add(word2);

        when(wordFileRepo.findAllWords()).thenReturn(allWords);

        // Act
        List<Word> result = wordService.findAllWords();

        // Assert
        assertEquals(result.size(), 2);
    }

    @Test
    void shouldFindWordByName() {
        // Arrange
        Word word1 = new Word();
        word1.setName("Test");
        word1.setDefinition("Test");
        word1.setExample("Test");
        word1.setVideoUrl("Test");
        word1.setUseRating(1);

        when(wordFileRepo.findWordByName("Test")).thenReturn(word1);

        // Act
        Word result = wordService.findWordByName("Test");

        // Assert
        assertEquals(result.getName(), "Test");
    }

    @Test
    void shouldFindWordsByCategory() {
        // Arrange
        Word word1 = new Word();
        word1.setName("Test");
        word1.setDefinition("Test");
        word1.setExample("Test");
        word1.setVideoUrl("Test");
        word1.setCategories("Test");
        word1.setUseRating(1);

        Word word2 = new Word();
        word2.setName("Test");
        word2.setDefinition("Test");
        word2.setExample("Test");
        word2.setVideoUrl("Test");
        word2.setCategories("Test");
        word2.setUseRating(1);

        List<Word> allWords = new ArrayList<>();
        allWords.add(word1);
        allWords.add(word2);

        when(wordFileRepo.findWordsByCategory("Test")).thenReturn(allWords);

        // Act
        List<Word> result = wordService.findWordsByCategory("Test");

        // Assert
        assertEquals(result.size(), 2);
    }

    @Test
    void shouldUpdateWord() {
        // Arrange
        Word word1 = new Word();
        word1.setWordId("1");
        word1.setName("Test");
        word1.setDefinition("Test");
        word1.setExample("Test");
        word1.setVideoUrl("Test");
        word1.setCategories("Test");
        word1.setUseRating(1);

        Word updatedWord = new Word();
        updatedWord.setWordId("1");
        updatedWord.setName("Updated Test");
        updatedWord.setDefinition("Updated Test");
        updatedWord.setExample("Updated Test");
        updatedWord.setVideoUrl("Updated Test");
        updatedWord.setCategories("Updated Test");
        updatedWord.setUseRating(2);

        when(wordFileRepo.updateWord("1", updatedWord)).thenReturn("Word Updated!");

        // Act
        Result<Word> result = wordService.updateWord("1", updatedWord);

        // Assert
        assertEquals(ActionStatus.SUCCESS, result.getStatus());
    }

    @Test
    void shouldNotUpdateWordWhenInvalid() {
//        // Arrange
//        Word word1 = new Word();
//        word1.setWordId("1");
//        word1.setName("Test");
//        word1.setDefinition("Test");
//        word1.setExample("Test");
//        word1.setVideoUrl("Test");
//        word1.setCategories("Test");
//        word1.setUseRating(1);
//
//        Word updatedWord = new Word();
//        updatedWord.setWordId("1");
//        updatedWord.setName("Updated Test");
//        updatedWord.setDefinition("Updated Test");
//        updatedWord.setExample("Updated Test");
//        updatedWord.setVideoUrl("Updated Test");
//        updatedWord.setCategories("Updated Test");
//        updatedWord.setUseRating(2);
//
//        when(wordFileRepo.updateWord("1", updatedWord)).thenReturn("Word Updated!");
//
//        // Act
//        Result<Word> result = wordService.updateWord("1", updatedWord);
//
//        // Assert
//        assertEquals(ActionStatus.SUCCESS, result.getStatus());
    }

    @Test
    void shouldDeleteWordById() {
        // Arrange
        Word word1 = new Word();
        word1.setWordId("1");
        word1.setName("Test");
        word1.setDefinition("Test");
        word1.setExample("Test");
        word1.setVideoUrl("Test");
        word1.setCategories("Test");
        word1.setUseRating(1);

        when(wordFileRepo.deleteWordById("1")).thenReturn("Word Deleted!");

        // Act
        Result<Word> result = wordService.deleteWordById("1");

        // Assert
        assertEquals(ActionStatus.SUCCESS, result.getStatus());
    }

    @Test
    void shouldNotDeleteWordByIdWhenInvalid() {
//        // Arrange
//        Word word1 = new Word();
//        word1.setWordId("1");
//        word1.setName("Test");
//        word1.setDefinition("Test");
//        word1.setExample("Test");
//        word1.setVideoUrl("Test");
//        word1.setCategories("Test");
//        word1.setUseRating(1);
//
//        when(wordFileRepo.deleteWordById("1")).thenReturn("Word Deleted!");
//
//        // Act
//        Result<Word> result = wordService.deleteWordById("1");
//
//        // Assert
//        assertEquals(ActionStatus.SUCCESS, result.getStatus());
    }
}