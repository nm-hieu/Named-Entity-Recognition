# Model Usage
from transformers import pipeline
# import json
import sys

def model(inputText):
    model_checkpoint = "./output/Saved_model"
    token_classifier = pipeline(
        "token-classification", model=model_checkpoint, aggregation_strategy="simple"
    )
    temp = token_classifier(inputText)
    print(temp)

    # JSON Output
    # json_object = json.dumps(str(temp), indent = 4)
    # with open("output.json", 'w') as file:
    #     file.write(json_object)

    # file.close()
    # return temp

model(sys.argv[1])