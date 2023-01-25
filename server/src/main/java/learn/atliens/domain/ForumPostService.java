package learn.atliens.domain;

import learn.atliens.domain.Result;
import learn.atliens.model.ForumPost;
import learn.atliens.repo.ForumPostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ForumPostService {

    @Autowired
    private ForumPostRepo repo;

    public Result<ForumPost> addForumPost(ForumPost post) {
        // dynamoDbMapper.save() = inserts or updates operation depending on whether the item already exists in the table.
        Result<ForumPost> result = new Result<>();
        ForumPost inserted = repo.addForumPost(post);

        if (inserted == null) {
            result.addMessage(ActionStatus.INVALID, "insert failed");
        } else {
            result.setPayload(inserted);
        }

        return result;
    }

    public List<ForumPost> findAllPosts() {
        System.out.println("Hit service");
        return repo.findAllPosts();
    }

    /*public List<Word> findWordsByCategory(String category) {
        List<Word> all = findAllPosts();
        return all.stream()
                .filter(word -> word.getCategories().contains(category))
                .collect(Collectors.toList());
    }*/

    public Result<ForumPost> deletePostById(String postId) {
        Result<ForumPost> result = new Result<>();
        String deletedPost = repo.deletePostById(postId);
        if (!deletedPost.equalsIgnoreCase("Post Deleted!")) {
            result.addMessage(ActionStatus.NOT_FOUND, "Word Id not found.");
        }
        return result;
    }
}
