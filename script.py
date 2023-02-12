import pymongo
import os
# Connect to the MongoDB database
os.system("cls" if os.name == "nt" else "clear")
print("Connecting to DB")
try:
    os.system("cls" if os.name == "nt" else "clear")
    client = pymongo.MongoClient(
        "KEY_HERE")
    print("""
    /$$      /$$ /$$$$$$$$ /$$        /$$$$$$   /$$$$$$  /$$      /$$ /$$$$$$$$           /$$$
    | $$  /$ | $$| $$_____/| $$       /$$__  $$ /$$__  $$| $$$    /$$$| $$_____/          |_  $$
    | $$ /$$$| $$| $$      | $$      | $$  \__/| $$  \ $$| $$$$  /$$$$| $$             /$$  \  $$
    | $$/$$ $$ $$| $$$$$   | $$      | $$      | $$  | $$| $$ $$/$$ $$| $$$$$         |__/   | $$
    | $$$$_  $$$$| $$__/   | $$      | $$      | $$  | $$| $$  $$$| $$| $$__/                | $$
    | $$$/ \  $$$| $$      | $$      | $$    $$| $$  | $$| $$\  $ | $$| $$             /$$   /$$/
    | $$/   \  $$| $$$$$$$$| $$$$$$$$|  $$$$$$/|  $$$$$$/| $$ \/  | $$| $$$$$$$$      |__/ /$$$/
    |__/     \__/|________/|________/ \______/  \______/ |__/     |__/|________/          |___/

                        Connected Successfully to Database
    """)

    # Choose the database and collection to use
    db = client["Collection"]
    collection = db["companies"]

    data = {}
    # Enter Company name
    name = input(" Enter company name : \n")
    image = input(
        "\nEnter a public google drive image link (REFER TO THE DOCUMENTATION) : \n")
    about = input("\n Tell me about the company\n")
    website = input("\n Enter the company website : \n")
    work_location = input("\n Enter the company work location : \n")
    data["name"] = name
    data["image"] = image
    data["about"] = {}
    data["about"]["about_comp"] = about
    data["about"]["website"] = website
    data["about"]["work_location"] = work_location
    job_profile = []
    count = 0
    while True:
        temp3 = []
        temp3.append(input("\n name of job \n"))
        temp3.append(input("\n duration of job (in months) \n"))
        temp2 = []
        while True:
            prompt = input(
                "\n Roles and requirements (Press e and enter to move to next stage)\n")
            if prompt == "e":
                break
            temp2.append(prompt)
        temp3.append(temp2)
        temp2 = []
        while True:
            prompt = input(
                "\n Additional requirements (Press e and enter to move to next stage)\n")
            if prompt == "e":
                break
            temp2.append(prompt)
        temp3.append(temp2)
        tempcount2 = []
        count += 1
        prompt2 = input("Create card number Y\\N ? " + str(count))
        if prompt2 == "n" or prompt2 == "N":
            break

    job_profile.append(temp3)
    # Insert the data into the collection
    data["about"]["job_profile_description"] = job_profile
    data["about"]["profile"] = {}
    count = 1
    while True:
        data["about"]["profile"][str(count)] = {}
        name = input("Enter name of the job")
        data["about"]["profile"][str(count)]['name'] = name
        temp = []
        while True:
            perk = input(
                "Enter job perks  (Press e and enter to move to next stage)")
            temp.append(perk)
            if perk == 'e':
                break
        data["about"]["profile"][str(count)]['perk'] = temp
        temp = []
        while True:
            perk = input(
                "Enter job eligibilty  (Press e and enter to move to next stage)")
            temp.append(perk)
            if perk == 'e':
                break
        data["about"]["profile"][str(count)]['eligibility'] = temp
        prompt2 = input("Create card number Y\\N? " + str(count))
        if prompt2 == "n" or prompt2 == "N":
            break
        count += 1

    print(data)
    collection.insert_one(data)
    print("""
    /$$$$$$  /$$   /$$  /$$$$$$   /$$$$$$  /$$$$$$$$  /$$$$$$   /$$$$$$  /$$
    / $$__  $$| $$  | $$ /$$__  $$ /$$__  $$| $$_____/ /$$__  $$ /$$__  $$| $$
    | $$  \__/| $$  | $$| $$  \__/| $$  \__/| $$      | $$  \__/| $$  \__/| $$
    |  $$$$$$ | $$  | $$| $$      | $$      | $$$$$   |  $$$$$$ |  $$$$$$ | $$
    \____  $$| $$  | $$| $$      | $$      | $$__/    \____  $$ \____  $$|__/
    /$$  \ $$| $$  | $$| $$    $$| $$    $$| $$       /$$  \ $$ /$$  \ $$    
    |  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/| $$$$$$$$|  $$$$$$/|  $$$$$$/ /$$
    \______/  \______/  \______/  \______/ |________/ \______/  \______/ |__/
                                                                        
                                                                    """)

except pymongo.errors.ServerSelectionTimeoutError:
    print("""
    /$$$$$$$$ /$$$$$$$  /$$$$$$$   /$$$$$$  /$$$$$$$  /$$
    | $$_____/| $$__  $$| $$__  $$ /$$__  $$| $$__  $$| $$
    | $$      | $$  \ $$| $$  \ $$| $$  \ $$| $$  \ $$| $$
    | $$$$$   | $$$$$$$/| $$$$$$$/| $$  | $$| $$$$$$$/| $$
    | $$__/   | $$__  $$| $$__  $$| $$  | $$| $$__  $$|__/
    | $$      | $$  \ $$| $$  \ $$| $$  | $$| $$  \ $$    
    | $$$$$$$$| $$  | $$| $$  | $$|  $$$$$$/| $$  | $$ /$$
    |________/|__/  |__/|__/  |__/ \______/ |__/  |__/|__/
                
                Please check your internet connection!                        
    """)
