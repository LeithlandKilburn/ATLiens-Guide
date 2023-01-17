package learn.atliens.model;


import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAutoGeneratedKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import lombok.Data;

@Data
@DynamoDBTable(tableName = "users")
public class User {

    @DynamoDBHashKey
    @DynamoDBAutoGeneratedKey
    private String userId;

    @DynamoDBAttribute
    private String username;

    @DynamoDBAttribute
    private String password;

    @DynamoDBAttribute
    private String roleId1;

    @DynamoDBAttribute
    private String roleId2;

    @DynamoDBAttribute
    private String roleId3;

    public String getUserId() {
        return userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoleId1() {
        return roleId1;
    }

    public void setRoleId1(String roleId1) {
        this.roleId1 = roleId1;
    }

    public String getRoleId2() {
        return roleId2;
    }

    public void setRoleId2(String roleId2) {
        this.roleId2 = roleId2;
    }

    public String getRoleId3() {
        return roleId3;
    }

    public void setRoleId3(String roleId3) {
        this.roleId3 = roleId3;
    }
}
