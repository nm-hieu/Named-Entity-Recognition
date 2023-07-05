# DELETE LATER | Set up for local path
import os
work_dir = "D:/[User] Hieu/HCMUS/Year 3/Y3 - S2/Học thống kê/Assignment/Final project/Named Entity Recognition/model"
os.chdir(work_dir)

# Model Usage
from transformers import pipeline
# import json
import sys

# def model(inputText):
def model(inputText):
    model_checkpoint = "./Saved_model"
    token_classifier = pipeline(
        "token-classification", model=model_checkpoint, aggregation_strategy="simple"
    )
    temp = token_classifier(inputText)
    # print(temp)

    # JSON Output
    # json_object = json.dumps(str(temp), indent = 4)
    # with open("output.json", 'w') as file:
    #     file.write(json_object)

    # file.close()
    return temp

if __name__ == "__main__":
    inputText = "Hello, my name is Joe and I live in Los Angeles"
    output = model(sys.argv[1])
    print("Python is running")
