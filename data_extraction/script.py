import firebase_admin
from firebase_admin import credentials, firestore
import csv
import time
from pymongo import MongoClient
import json
import os 
import pyautogui
pyautogui.hotkey('alt', 'enter')
# clear the terminal
os.system('cls' if os.name == 'nt' else 'clear')

print('''
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠛⢩⣴⣶⣶⣶⣌⠙⠫⠛⢋⣭⣤⣤⣤⣤⡙⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡟⢡⣾⣿⠿⣛⣛⣛⣛⣛⡳⠆⢻⣿⣿⣿⠿⠿⠷⡌⠻⣿⣿⣿⣿
⣿⣿⣿⣿⠏⣰⣿⣿⣴⣿⣿⣿⡿⠟⠛⠛⠒⠄⢶⣶⣶⣾⡿⠶⠒⠲⠌⢻⣿⣿
⣿⣿⠏⣡⢨⣝⡻⠿⣿⢛⣩⡵⠞⡫⠭⠭⣭⠭⠤⠈⠭⠒⣒⠩⠭⠭⣍⠒⠈⠛
⡿⢁⣾⣿⣸⣿⣿⣷⣬⡉⠁⠄⠁⠄⠄⠄⠄⠄⠄⠄⣶⠄⠄⠄⠄⠄⠄⠄⠄⢀
⢡⣾⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⠄⠄⠄⠄⠄⠄⢀⣠⣿⣦⣤⣀⣀⣀⣀⠄⣤⣾
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⡶⢇⣰⣿⣿⣟⠿⠿⠿⠿⠟⠁⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡟⢛⡛⠿⠿⣿⣧⣶⣶⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣧⠸⣿⣿
⠘⢿⣿⣿⣿⣿⣿⡇⢿⡿⠿⠦⣤⣈⣙⡛⠿⠿⠿⣿⣿⣿⣿⠿⠿⠟⠛⡀⢻⣿
⠄⠄⠉⠻⢿⣿⣿⣷⣬⣙⠳⠶⢶⣤⣍⣙⡛⠓⠒⠶⠶⠶⠶⠖⢒⣛⣛⠁⣾⣿
⠄⠄⠄⠄⠄⠈⠛⠛⠿⠿⣿⣷⣤⣤⣈⣉⣛⣛⣛⡛⠛⠛⠿⠿⠿⠟⢋⣼⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠉⣻⣿⣿⣿⣿⡿⠿⠛⠃⠄⠙⠛⠿⢿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢬⣭⣭⡶⠖⣢⣦⣀⠄⠄⠄⠄⢀⣤⣾⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣶⣶⣶⣾⣿⣿⣿⣿⣷⡄⠄⢠⣾⣿⣿⣿

 /$$$$$$$$          /$$               /$$       /$$                     
| $$_____/         | $$              | $$      |__/                           
| $$     /$$$$$$  /$$$$$$    /$$$$$$$| $$$$$$$  /$$ /$$$$$$$   /$$$$$$      
| $$$$$ /$$__  $$|_  $$_/   /$$_____/| $$__  $$| $$| $$__  $$ /$$__  $$      
| $$__/| $$$$$$$$  | $$    | $$      | $$  \ $$| $$| $$  \ $$| $$  \ $$         
| $$   | $$_____/  | $$ /$$| $$      | $$  | $$| $$| $$  | $$| $$  | $$       
| $$   |  $$$$$$$  |  $$$$/|  $$$$$$$| $$  | $$| $$| $$  | $$|  $$$$$$$      
|__/    \_______/   \___/   \_______/|__/  |__/|__/|__/  |__/ \____  $$        
                                                              /$$  \ $$                
                                                             |  $$$$$$/                
                                                              \______/                 
    Please sit back and relax while we extract the data from the database. This may take a while.                                                                                  
''')
if not os.path.exists('serviceAccountKey.json') or not os.path.exists('config.json'):
    os.system('cls' if os.name == 'nt' else 'clear')
    print('''
        ⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿  
        ⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿ 
        ⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿ 
        ⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿

          /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$                   
         /$$__  $$ /$$__  $$| $$__  $$ /$$__  $$                  
        | $$  \ $$| $$  \ $$| $$  \ $$| $$  \__/                  
        | $$  | $$| $$  | $$| $$$$$$$/|  $$$$$$                   
        | $$  | $$| $$  | $$| $$____/  \____  $$                  
        | $$  | $$| $$  | $$| $$       /$$  \ $$                  
        |  $$$$$$/|  $$$$$$/| $$      |  $$$$$$/       /$$ /$$ /$$
         \______/  \______/ |__/       \______/       |__/|__/|__/
                                                          
                                                          
                                                            
                                              
        serviceAccountKey.json or config.json not found. Please check the files and try again.
    ''')
    input("Press Enter to exit...")
    exit()

cred = credentials.Certificate("serviceAccountKey.json")
config = None
# Read the config file
with open('config.json') as f:
    config = json.load(f)
mongodb_url = config['mongodb_url']

firebase_admin.initialize_app(cred)
if os.path.exists('applications.csv'):
    # check if file is being used by another process
    try:
        os.remove('applications.csv')
    except PermissionError:
        os.system('cls' if os.name == 'nt' else 'clear')
        print('''
⠀⠀⢀⣤⣶⣶⣤⣄⡀
⠀⢀⣿⣿⣿⣿⣿⣿⣿⡆
⠀⠸⣿⣿⣿⣿⣿⡟⡟⡗ ⣿⠉⣿⠉⣿⡏⠹⡏⢹⡏⢹⣿⣿⠉⣿⠉⣿⡟⢋⠛⣿⠉⡟⢉⡏⠹⠏⣹⣿
⠀⠀⠙⠏⠯⠛⣉⢲⣧⠟ ⣿⠄⣿⠄⣿⡇⡄⠁⢸⡇⢸⣿⣿⠄⣿⠄⣿⠄⣿⣿⣿⠄⡀⢻⣿⡄⢠⣿⣿
⠀⠀⠠⢭⣝⣾⠿⣴⣿⠇ ⣿⣦⣤⣴⣿⣧⣿⣤⣼⣧⣬⣭⣿⣦⣤⣴⣿⣧⣤⣤⣿⣤⣷⣤⣿⣧⣼⣿⣿
⠀⠀⢐⣺⡿⠁⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⣶⣶⣶⣶⣶⣶⠀
⠀⠀⣚⣿⠃ ⣶⣶⣶⣶
⢀⣿⣿⣿⣷⢒⣢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣶⣶⣄⠄
⢰⣿⣿⡿⣿⣦⠬⢝⡄⠀⠀⠀⠀⠀⠀⢠⣿⠿⠿⠟⠛⠋⠁
⠠⢿⣿⣷⠺⣿⣗⠒⠜⡄⠀⠀⠀⠀⣴⠟⠁
⠀⣰⣿⣷⣍⡛⣯⣯⣙⡁⠀⠀⣠⡾⠁
⠀⠨⢽⣿⣷⢍⣛⣶⢷⣼⣠⣾⠋
⠀⠀⠘⢿⣿⣖⠬⣹⣶⣿⠟⠁
⠀⠀⠀⠚⠿⠿⡒⠨⠛⠋
⠀⠀⠀⠐⢒⣛⣷
⠀⠀⠀⢘⣻⣭⣭
⠀⠀⠀⡰⢚⣺⣿
⠀⠀⢠⣿⣿⣿⣿⣦⡄
⠀⠀⢸⡿⢿⣿⢿⡿⠃
⠀⠀⠘⡇⣸⣿⣿⣿⣆
⠀⠀⠀⠀⠸⣿⡿⠉⠁
⠀⠀⠀⠀⠀⢿⡟

  /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$                   
 /$$__  $$ /$$__  $$| $$__  $$ /$$__  $$                  
| $$  \ $$| $$  \ $$| $$  \ $$| $$  \__/                  
| $$  | $$| $$  | $$| $$$$$$$/|  $$$$$$                   
| $$  | $$| $$  | $$| $$____/  \____  $$                  
| $$  | $$| $$  | $$| $$       /$$  \ $$                  
|  $$$$$$/|  $$$$$$/| $$      |  $$$$$$/       /$$ /$$ /$$
 \______/  \______/ |__/       \______/       |__/|__/|__/
                                                            
    Please close any other applications that are using applications.csv (Microsoft Excel etc.)
        ''')
        input("Press Enter to exit...")
        exit()

client = MongoClient(mongodb_url)
db = client.Collection
collection = db.companies

db = firestore.client()
# Reference to the applications collection
users_ref = db.collection('users')

# Ask if the user wants to check applications or see registered users
os.system('cls' if os.name == 'nt' else 'clear')
choice  = input('''
                                            :
                                        :::
                    '::                   ::::
                    '::::.     .....:::.:::::::
                    '::::::::::::::::::::::::::::
                    ::::::XUWWWWWU:::::XW$$$$$$WX:
                    ::::X$$$$$$$$$$W::X$$$$$$$$$$Wh
                ::::t$$$$$$$$$$$$W:$$$$$$P*$$$$M::
                :::X$$$$$$""""$$$$X$$$$$   ^$$$$X:::
                ::::M$$$$$$    ^$$$RM$$$L    <$$$X::::
                .:::::M$$$$$$     $$$R:$$$$.   d$$R:::`
            '~::::::?$$$$$$...d$$$X$6R$$$$$$$$RXW$X:'`
                '~:WNWUXT#$$$$$$$$TU$$$$W6IBBIW@$$RX:
                `~
1. Check Applications
2. See Registered Users
3. See Incomplete User Profiles

Enter 1 or 2 or 3:
''')
# wait till the user enters a valid choice
while choice != "1" and choice != "2" and choice != "3":
    os.system('cls' if os.name == 'nt' else 'clear')
    choice  = input('''
                                            :
                                        :::
                    '::                   ::::
                    '::::.     .....:::.:::::::
                    '::::::::::::::::::::::::::::
                    ::::::XUWWWWWU:::::XW$$$$$$WX:
                    ::::X$$$$$$$$$$W::X$$$$$$$$$$Wh
                ::::t$$$$$$$$$$$$W:$$$$$$P*$$$$M::
                :::X$$$$$$""""$$$$X$$$$$   ^$$$$X:::
                ::::M$$$$$$    ^$$$RM$$$L    <$$$X::::
                .:::::M$$$$$$     $$$R:$$$$.   d$$R:::`
            '~::::::?$$$$$$...d$$$X$6R$$$$$$$$RXW$X:'`
                '~:WNWUXT#$$$$$$$$TU$$$$W6IBBIW@$$RX:
                `~
            1. Check Applications
            2. See Registered Users
            3. See Incomplete User Profiles

            Enter 1 or 2 or 3:
            ''')
    
if choice == "1":
    query = users_ref.where('applied', 'not-in', [[]])
    applications = query.stream()
    for application in applications:
        name = application.to_dict()['name']
        resume = application.to_dict()['resume']
        email = application.to_dict()['email']
        phone = application.to_dict()['contactNumber']
        college = application.to_dict()['college']
        course = application.to_dict()['course']
        year = application.to_dict()['yearOfStudy'] + " Year"
        userId = application.id
        keys = application.to_dict()['applied']
        os.system('cls' if os.name == 'nt' else 'clear')
        try: 
            for key in keys:
                pipeline = [
                    {"$match": {f"job_profile_description.{key}": {"$exists": True}}},
                    {"$project": {
                    "name": 1,
                    "job": {"$arrayElemAt": [{"$arrayElemAt": [f"$job_profile_description.{key}", 0]}, 0]}}}
                ]
                # Run the aggregation pipeline
                results = collection.aggregate(pipeline)
                # check if we have any results
                # Iterate over the results and print the value of the name field
                for result in results:
                    print([userId, name, resume, email, phone, college, result["name"], result["job"], course, year]);
                    with open('applications.csv', 'a', newline='') as file:
                        writer = csv.writer(file)
                        # set the header
                        if os.stat('applications.csv').st_size == 0:
                            writer.writerow(['User ID', 'Name', 'Resume Link', 'Email', 'Phone', 'College', 'Company', 'Job', 'College Course', 'Degree Year'])
                            # leave a blank line
                            writer.writerow([])
                        writer.writerow([userId, name, resume, email, phone, college, result["name"], result["job"], course, year])
                    file.close()
            time.sleep(1)
        except:
            os.system('cls' if os.name == 'nt' else 'clear')
            print('''
    ⠀⠀⢀⣤⣶⣶⣤⣄⡀
    ⠀⢀⣿⣿⣿⣿⣿⣿⣿⡆
    ⠀⠸⣿⣿⣿⣿⣿⡟⡟⡗ ⣿⠉⣿⠉⣿⡏⠹⡏⢹⡏⢹⣿⣿⠉⣿⠉⣿⡟⢋⠛⣿⠉⡟⢉⡏⠹⠏⣹⣿
    ⠀⠀⠙⠏⠯⠛⣉⢲⣧⠟ ⣿⠄⣿⠄⣿⡇⡄⠁⢸⡇⢸⣿⣿⠄⣿⠄⣿⠄⣿⣿⣿⠄⡀⢻⣿⡄⢠⣿⣿
    ⠀⠀⠠⢭⣝⣾⠿⣴⣿⠇ ⣿⣦⣤⣴⣿⣧⣿⣤⣼⣧⣬⣭⣿⣦⣤⣴⣿⣧⣤⣤⣿⣤⣷⣤⣿⣧⣼⣿⣿
    ⠀⠀⢐⣺⡿⠁⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⣶⣶⣶⣶⣶⣶⠀
    ⠀⠀⣚⣿⠃ ⣶⣶⣶⣶
    ⢀⣿⣿⣿⣷⢒⣢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣶⣶⣄⠄
    ⢰⣿⣿⡿⣿⣦⠬⢝⡄⠀⠀⠀⠀⠀⠀⢠⣿⠿⠿⠟⠛⠋⠁
    ⠠⢿⣿⣷⠺⣿⣗⠒⠜⡄⠀⠀⠀⠀⣴⠟⠁
    ⠀⣰⣿⣷⣍⡛⣯⣯⣙⡁⠀⠀⣠⡾⠁
    ⠀⠨⢽⣿⣷⢍⣛⣶⢷⣼⣠⣾⠋
    ⠀⠀⠘⢿⣿⣖⠬⣹⣶⣿⠟⠁
    ⠀⠀⠀⠚⠿⠿⡒⠨⠛⠋
    ⠀⠀⠀⠐⢒⣛⣷
    ⠀⠀⠀⢘⣻⣭⣭
    ⠀⠀⠀⡰⢚⣺⣿
    ⠀⠀⢠⣿⣿⣿⣿⣦⡄
    ⠀⠀⢸⡿⢿⣿⢿⡿⠃
    ⠀⠀⠘⡇⣸⣿⣿⣿⣆
    ⠀⠀⠀⠀⠸⣿⡿⠉⠁
    ⠀⠀⠀⠀⠀⢿⡟

    /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$                   
    /$$__  $$ /$$__  $$| $$__  $$ /$$__  $$                  
    | $$  \ $$| $$  \ $$| $$  \ $$| $$  \__/                  
    | $$  | $$| $$  | $$| $$$$$$$/|  $$$$$$                   
    | $$  | $$| $$  | $$| $$____/  \____  $$                  
    | $$  | $$| $$  | $$| $$       /$$  \ $$                  
    |  $$$$$$/|  $$$$$$/| $$      |  $$$$$$/       /$$ /$$ /$$
    \______/  \______/ |__/       \______/       |__/|__/|__/
                                                                
        There are no applications for this user.
            ''')
            input("Press Enter to exit...")
            exit()
if choice == "2":
    query = users_ref.where('name', '!=', '')
    applications = query.stream()
    os.system('cls' if os.name == 'nt' else 'clear')
    for application in applications:
        try: 
            name = application.to_dict()['name']
            resume = application.to_dict()['resume']
            email = application.to_dict()['email']
            phone = application.to_dict()['contactNumber']
            college = application.to_dict()['college']
            course = application.to_dict()['course']
            year = application.to_dict()['yearOfStudy'] + " Year"
            userId = application.id
            print([userId, name, resume, email, phone, college, course, year]);
            with open('applications.csv', 'a', newline='') as file:
                writer = csv.writer(file)
                # set the header
                if os.stat('applications.csv').st_size == 0:
                    writer.writerow(['User ID', 'Name', 'Resume Link', 'Email', 'Phone', 'College', 'College Course', 'Degree Year'])
                    # leave a blank line
                    writer.writerow([])
                writer.writerow([userId, name, resume, email, phone, college, course, year])
            file.close()
            time.sleep(1)
        except:
            os.system('cls' if os.name == 'nt' else 'clear')
            print('''
    ⠀⠀⢀⣤⣶⣶⣤⣄⡀
    ⠀⢀⣿⣿⣿⣿⣿⣿⣿⡆
    ⠀⠸⣿⣿⣿⣿⣿⡟⡟⡗ ⣿⠉⣿⠉⣿⡏⠹⡏⢹⡏⢹⣿⣿⠉⣿⠉⣿⡟⢋⠛⣿⠉⡟⢉⡏⠹⠏⣹⣿
    ⠀⠀⠙⠏⠯⠛⣉⢲⣧⠟ ⣿⠄⣿⠄⣿⡇⡄⠁⢸⡇⢸⣿⣿⠄⣿⠄⣿⠄⣿⣿⣿⠄⡀⢻⣿⡄⢠⣿⣿
    ⠀⠀⠠⢭⣝⣾⠿⣴⣿⠇ ⣿⣦⣤⣴⣿⣧⣿⣤⣼⣧⣬⣭⣿⣦⣤⣴⣿⣧⣤⣤⣿⣤⣷⣤⣿⣧⣼⣿⣿
    ⠀⠀⢐⣺⡿⠁⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⣶⣶⣶⣶⣶⣶⠀
    ⠀⠀⣚⣿⠃ ⣶⣶⣶⣶
    ⢀⣿⣿⣿⣷⢒⣢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣶⣶⣄⠄
    ⢰⣿⣿⡿⣿⣦⠬⢝⡄⠀⠀⠀⠀⠀⠀⢠⣿⠿⠿⠟⠛⠋⠁
    ⠠⢿⣿⣷⠺⣿⣗⠒⠜⡄⠀⠀⠀⠀⣴⠟⠁
    ⠀⣰⣿⣷⣍⡛⣯⣯⣙⡁⠀⠀⣠⡾⠁
    ⠀⠨⢽⣿⣷⢍⣛⣶⢷⣼⣠⣾⠋
    ⠀⠀⠘⢿⣿⣖⠬⣹⣶⣿⠟⠁
    ⠀⠀⠀⠚⠿⠿⡒⠨⠛⠋
    ⠀⠀⠀⠐⢒⣛⣷
    ⠀⠀⠀⢘⣻⣭⣭
    ⠀⠀⠀⡰⢚⣺⣿
    ⠀⠀⢠⣿⣿⣿⣿⣦⡄
    ⠀⠀⢸⡿⢿⣿⢿⡿⠃
    ⠀⠀⠘⡇⣸⣿⣿⣿⣆
    ⠀⠀⠀⠀⠸⣿⡿⠉⠁
    ⠀⠀⠀⠀⠀⢿⡟

    /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$                   
    /$$__  $$ /$$__  $$| $$__  $$ /$$__  $$                  
    | $$  \ $$| $$  \ $$| $$  \ $$| $$  \__/                  
    | $$  | $$| $$  | $$| $$$$$$$/|  $$$$$$                   
    | $$  | $$| $$  | $$| $$____/  \____  $$                  
    | $$  | $$| $$  | $$| $$       /$$  \ $$                  
    |  $$$$$$/|  $$$$$$/| $$      |  $$$$$$/       /$$ /$$ /$$
    \______/  \______/ |__/       \______/       |__/|__/|__/
                                                                
       This user profile is not complete.
            ''')
            input("Press Enter to exit...")
            exit()
if choice == "3":
    query = users_ref.where('resume', '!=', '')
    applications = query.stream()
    os.system('cls' if os.name == 'nt' else 'clear')
    for application in applications:
        try: 
            resume = application.to_dict()['resume']
            userId = application.id
            if 'name' not in application.to_dict():
                print([userId, resume]);
                with open('applications.csv', 'a', newline='') as file:
                    writer = csv.writer(file)
                    # set the header
                    if os.stat('applications.csv').st_size == 0:
                        writer.writerow(['userId', 'Resume'])
                        # leave a blank line
                        writer.writerow([])
                    writer.writerow([userId, resume])
                file.close()
            time.sleep(1)
        except:
            os.system('cls' if os.name == 'nt' else 'clear')
            print('''
    ⠀⠀⢀⣤⣶⣶⣤⣄⡀
    ⠀⢀⣿⣿⣿⣿⣿⣿⣿⡆
    ⠀⠸⣿⣿⣿⣿⣿⡟⡟⡗ ⣿⠉⣿⠉⣿⡏⠹⡏⢹⡏⢹⣿⣿⠉⣿⠉⣿⡟⢋⠛⣿⠉⡟⢉⡏⠹⠏⣹⣿
    ⠀⠀⠙⠏⠯⠛⣉⢲⣧⠟ ⣿⠄⣿⠄⣿⡇⡄⠁⢸⡇⢸⣿⣿⠄⣿⠄⣿⠄⣿⣿⣿⠄⡀⢻⣿⡄⢠⣿⣿
    ⠀⠀⠠⢭⣝⣾⠿⣴⣿⠇ ⣿⣦⣤⣴⣿⣧⣿⣤⣼⣧⣬⣭⣿⣦⣤⣴⣿⣧⣤⣤⣿⣤⣷⣤⣿⣧⣼⣿⣿
    ⠀⠀⢐⣺⡿⠁⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⣶⣶⣶⣶⣶⣶⠀
    ⠀⠀⣚⣿⠃ ⣶⣶⣶⣶
    ⢀⣿⣿⣿⣷⢒⣢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣶⣶⣄⠄
    ⢰⣿⣿⡿⣿⣦⠬⢝⡄⠀⠀⠀⠀⠀⠀⢠⣿⠿⠿⠟⠛⠋⠁
    ⠠⢿⣿⣷⠺⣿⣗⠒⠜⡄⠀⠀⠀⠀⣴⠟⠁
    ⠀⣰⣿⣷⣍⡛⣯⣯⣙⡁⠀⠀⣠⡾⠁
    ⠀⠨⢽⣿⣷⢍⣛⣶⢷⣼⣠⣾⠋
    ⠀⠀⠘⢿⣿⣖⠬⣹⣶⣿⠟⠁
    ⠀⠀⠀⠚⠿⠿⡒⠨⠛⠋
    ⠀⠀⠀⠐⢒⣛⣷
    ⠀⠀⠀⢘⣻⣭⣭
    ⠀⠀⠀⡰⢚⣺⣿
    ⠀⠀⢠⣿⣿⣿⣿⣦⡄
    ⠀⠀⢸⡿⢿⣿⢿⡿⠃
    ⠀⠀⠘⡇⣸⣿⣿⣿⣆
    ⠀⠀⠀⠀⠸⣿⡿⠉⠁
    ⠀⠀⠀⠀⠀⢿⡟

    /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$                   
    /$$__  $$ /$$__  $$| $$__  $$ /$$__  $$                  
    | $$  \ $$| $$  \ $$| $$  \ $$| $$  \__/                  
    | $$  | $$| $$  | $$| $$$$$$$/|  $$$$$$                   
    | $$  | $$| $$  | $$| $$____/  \____  $$                  
    | $$  | $$| $$  | $$| $$       /$$  \ $$                  
    |  $$$$$$/|  $$$$$$/| $$      |  $$$$$$/       /$$ /$$ /$$
    \______/  \______/ |__/       \______/       |__/|__/|__/
                                                                
       This user profile is not complete.
            ''')
            input("Press Enter to exit...")
            exit()


os.system('cls' if os.name == 'nt' else 'clear')
print('''
⣻⡿⢏⢥⡻⢬⡍⢳⡘⢦⢣⢝⡢⡓⡜⠰⢂⠐⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣦⠀
⡿⢏⡜⣲⡙⢦⡙⢧⡙⣎⠞⢦⠡⢁⠈⠀⠀⠄⠀⢈⠀⠈⢀⠈⠀⠈⠐⠈⠀⠁⡀⠁⠈⠀⠄⠁⠀⢁⠂⠄⠀⢀⠀⠀⠉⠲⣄⡀⠹⣧
⡱⣩⢚⡥⣙⢦⡙⣦⡙⢦⡛⣬⢓⡆⣴⣤⣦⣴⣬⣦⣴⣤⣆⣤⣈⡀⠐⢀⣈⣴⣴⣶⣶⣶⣦⣤⣌⡀⠀⠠⠀⠠⠀⠈⠀⠄⡈⠧⣀⠈
⣱⢣⢏⡖⣭⢒⡝⢦⣝⢣⠞⣴⣿⠿⣛⣿⣿⣿⣦⡄⠉⠉⠙⢻⣿⣿⣿⣿⠟⠋⠉⣨⣿⣿⣿⣏⠛⠿⣿⣶⣄⠀⠠⠁⠀⠄⡀⠀⠹⡄
⢎⡳⢎⡜⢦⢫⢜⡣⢎⢧⣛⣿⠋⡀⢾⣿⣿⣿⣿⣿⣶⠀⠀⢀⣼⡿⢿⣾⠗⠀⣾⣿⣿⣿⣿⣿⣧⡀⠈⠛⣿⡧⠀⠀⠁⠐⡀⢁⠂⢜
⡹⣜⢣⢞⡱⢎⢮⡱⣋⢦⡹⣿⣷⣈⠻⣿⣿⣿⣿⣿⠟⠀⢠⣿⣿⠀⡍⢿⣿⡄⠹⣿⣿⣿⣿⣿⡟⠋⠀⣰⣿⠗⠀⢈⠀⡐⠠⠀⠌⠰
⠳⣌⢳⢪⡕⣎⠶⡱⣍⠶⡱⢻⣿⣧⣳⡰⠩⠿⠟⡁⢀⣠⣾⡿⡁⢆⠈⢆⡹⣿⣄⣩⠍⡛⠟⠉⠀⣀⣴⣿⠋⠀⡐⠀⠂⠀⠄⠡⠘⡠
⡹⡌⢧⠳⡜⡜⢮⡱⢎⡳⣍⢣⠞⡽⢻⣿⣷⣷⢶⣶⣾⣿⡿⣵⢏⡶⣍⠶⣰⢹⣿⡙⢻⢷⣶⣶⡿⢿⠛⠁⢀⠠⢀⠠⠁⡈⠄⡁⠂⠁
⡱⢎⢇⡻⣌⢳⢃⡞⡥⢳⢜⡣⡝⡼⣡⠂⣽⣿⣿⣿⣿⣿⣿⣽⣞⣳⣭⢳⣣⢿⣿⣿⣶⡆⠀⠀⠀⣀⠠⢀⠂⠀⠂⠀⠀⡐⠀⠄⠠⠁
⡱⢎⢮⡱⢎⡣⢏⡲⣙⢬⡚⡴⣹⢒⠡⣼⣿⣿⣿⣿⣿⣿⣿⣿⡽⣟⣿⣿⣿⣿⣮⣟⣽⣿⣶⣀⠀⠀⠈⠀⠀⠐⠀⠀⠀⠄⡁⢈⠀⠄
⡱⣋⠶⣱⢋⠶⣩⠖⣭⢢⢓⡱⢎⠢⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⢮⣿⣽⣾⣷⣿⣿⣿⡆⠀⠀⠀⠈⠀⠀⠀⠀⠒⣀⠂⡀⢀
⡱⢣⡝⢦⣋⠞⣥⠺⣔⢣⡙⢦⢃⡱⢛⢿⡟⣿⡿⣿⠿⣿⣿⣿⣿⣾⣿⣿⡿⣿⢿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⢀⠠⠁⠄⢂⠐⠠
⡱⢣⢎⡳⣌⢏⠶⣩⠖⣣⡙⢆⡇⢆⡉⢂⠉⠐⠡⠉⠊⡙⠿⣿⣿⡟⡿⠏⠓⠉⠋⠉⠋⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠠⠀⠂⠄⣈⠐
⡱⣃⢮⠱⣎⠺⡜⣥⢛⡤⣙⠶⣘⢢⡑⢢⠈⠄⠐⡀⠄⠀⠁⠐⠀⢈⠀⡁⢀⠠⠄⠀⢀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠄⠂⡈⠐⠠⢈
⡱⡜⣢⢛⡴⢫⡜⢦⡍⢶⣉⠶⡑⢦⡉⠆⡌⡐⠀⡐⠈⡐⠈⠄⡈⠄⡀⠐⡀⢀⠀⠁⠀⢀⠀⠁⠀⠀⡀⠀⠀⠁⠀⢀⠀⠄⠠⢁⠂⠄
⡱⢥⢣⡍⣖⢣⠞⡱⢎⠧⡜⢎⡙⢦⡉⠖⡰⢀⠁⠠⠀⠄⡐⢀⠠⠀⡀⠁⡀⠄⠈⠐⡀⠀⠀⢀⠀⠀⠀⠀⠠⠀⠈⠄⠠⢀⠱⠀⡌⠐
⢧⢋⠖⣱⢪⠱⣎⠵⣫⠜⣜⢣⡝⣢⠙⣆⠱⠀⠌⡀⠂⠄⡀⠄⠀⠂⢀⠁⠀⡐⠈⠀⠄⠐⠈⠀⠀⠈⠀⠀⠀⠄⠡⠈⠄⢂⠄⡃⠤⢁
⢧⣋⠞⡥⢎⠳⣌⠳⢬⡙⣤⠳⡸⢄⠫⣄⠣⢉⡐⠠⠁⠠⢀⠂⠁⢂⠀⠌⠀⠄⠠⢁⠠⠈⠀⠄⡐⠀⠈⠀⠄⠈⠄⠡⣈⠢⡘⢠⠒⠠
⣧⢻⡜⣱⢋⠶⣌⡹⣂⠗⡢⢝⡰⢋⡱⢄⠃⢆⠰⠁⠠⠁⢂⠐⠨⡀⢂⠄⠡⠈⡀⢂⠠⢈⠐⠀⠀⢁⠊⡐⡈⠌⡐⠡⣀⠑⡌⢂⠡⢃
⣭⢳⣭⢣⢏⡞⡴⢣⡕⣫⢱⣊⡔⢣⢰⡈⣔⣨⡐⣌⢠⠐⡀⠌⡀⠡⠀⠂⠄⠁⠀⢀⠠⠀⠀⠁⠈⠀⠀⠁⠌⠢⢅⠣⢄⠣⡘⡌⡑⢢
⣯⣗⣮⣛⣮⣽⡹⣧⢻⣜⣧⡟⡾⣏⢷⡻⡜⢧⡛⠾⡹⢏⠿⣳⠯⣷⢳⣳⢎⣶⢣⣖⡦⣖⢦⡌⡔⣈⡐⢀⠀⡐⠈⢘⢢⢣⠱⣌⠱⣂
⣟⣮⢷⣻⣞⣷⣻⣽⣻⣞⣶⣝⢦⣉⢦⡑⣌⢂⠌⡐⠡⢈⠂⡅⡘⢀⠃⠌⠊⠔⡉⠌⠃⠍⠂⡙⠘⠠⢉⠃⠎⡐⢈⡤⣓⢎⡳⣌⠳⣌
⣿⡽⣯⣷⢿⣞⣯⣷⡿⣯⣿⡾⣿⣽⡾⣽⢾⡽⣮⣵⢻⣬⢳⡜⣜⣣⠻⣜⡛⢶⡱⢎⡖⣦⡱⣤⢲⡰⣆⣜⣲⣜⡳⣞⡭⡞⡵⣎⡟⡼
⣿⣿⢯⣿⣻⣯⣿⢷⣿⣟⣷⡿⣟⣾⣟⣿⢯⣿⣳⣯⣟⡾⣧⣟⡾⣖⣟⣶⣹⢧⣛⣮⡽⡶⣝⣮⠷⣝⣮⡽⢶⡭⣷⡹⣞⡽⣳⡝⣾⡹
⣿⣻⡿⣯⣿⣻⣽⣿⣳⡿⣯⣿⣟⣿⢾⣻⡿⣽⣯⣷⣿⣻⣽⣯⣿⣽⣾⣳⣯⣿⣽⣾⣽⣻⣽⣞⡿⣽⡾⣽⢯⣟⣶⣻⡵⣏⡷⣹⠶⣽


/$$$$$$$  
| $$__  $$    
| $$  \ $$  /$$$$$$  /$$$$$$$   /$$$$$$    
| $$  | $$ /$$__  $$| $$__  $$ /$$__  $$  
| $$  | $$| $$  \ $$| $$  \ $$| $$$$$$$$ 
| $$  | $$| $$  | $$| $$  | $$| $$_____/                                                    
| $$$$$$$/|  $$$$$$/| $$  | $$|  $$$$$$$                                                    
|_______/  \______/ |__/  |__/ \_______/     
                                                                                            
    File generated as "applications.csv" in the same folder.                                                                                  
''')
# wait for user input to exit
input("Press Enter to exit...")