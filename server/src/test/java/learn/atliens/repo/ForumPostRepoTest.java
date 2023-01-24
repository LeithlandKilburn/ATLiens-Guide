package learn.atliens.repo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;

import static org.junit.jupiter.api.Assertions.*;

@ComponentScan("learn.atliens")
@SpringBootTest
class ForumPostRepoTest {

    private ForumPostRepo repo;

    public ForumPostRepoTest (ForumPostRepo repo) {
        this.repo = repo;
    }

    @Test
    void addForumPost() {

    }

    @Test
    void findAllPosts() {
    }

    @Test
    void deletePostById() {
    }
}