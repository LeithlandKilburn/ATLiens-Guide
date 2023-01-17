package learn.atliens.config;

import com.amazonaws.services.dynamodbv2.datamodeling.*;

import java.util.Map;

@DynamoDBTable(tableName = "dynamo-db-table")
public class TestTable {

        private String userId;
        private String deviceId;
        private String category;
        private String typeId;
        private Map<String,String> metadata;

        @DynamoDBRangeKey(attributeName = "id")
        public String getDeviceId() { return deviceId;  }
        public void setDeviceId(String deviceId) {  this.deviceId = deviceId; }

        @DynamoDBHashKey(attributeName = "userId")
        @DynamoDBIndexHashKey(attributeName = "userId", globalSecondaryIndexName="userId-typeId-index")
        public String getUserId() { return userId; }
        public void setUserId(String userId) { this.userId = userId; }

        @DynamoDBTyped(value = DynamoDBMapperFieldModel.DynamoDBAttributeType.M)
        @DynamoDBAttribute(attributeName = "metadata")
        public Map<String,String> getMetadata() { return metadata; }
        public void setMetadata(Map<String,String> metadata) { this.metadata = metadata; }

        @DynamoDBAttribute(attributeName = "typeId")
        @DynamoDBIndexRangeKey(attributeName = "typeId", globalSecondaryIndexName = "userId-typeId-index")
        public String getTypeId() { return typeId; }
        public void setTypeId(String typeId) { this.typeId = typeId;}
}
