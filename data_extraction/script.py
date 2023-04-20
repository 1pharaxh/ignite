
import csv
import time
from pymongo import MongoClient
import json
import subprocess
import sys
import os 
import pyautogui
pyautogui.hotkey('alt', 'enter')
# clear the terminal
try:
    #check if node is installed
    subprocess.check_call(['node', '--version'], stdout=subprocess.DEVNULL)
    print("node is installed")

except subprocess.CalledProcessError:
    print("node is not installed please install node")
    # open the node website
    subprocess.run(["start", "https://nodejs.org/en/download/"], shell=True)
    sys.exit(1)
# run command to dump the database   
cmd = 'npx -p node-firestore-import-export firestore-export -a serviceAccountKey.json -b backup.json'

result = subprocess.run(['powershell', '-Command', cmd], shell=True, stdout=subprocess.PIPE)

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

# read the backup.json file
with open('backup.json') as f:
    data = json.load(f)
data = data["__collections__"]["users"]
config = None
# Read the config file
with open('config.json') as f:
    config = json.load(f)
mongodb_url = config['mongodb_url']

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
4. Number of Registered Users

Enter 1 or 2 or 3 or 4:
''')
# wait till the user enters a valid choice
while choice != "1" and choice != "2" and choice != "3" and choice != "4":
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
4. Number of Registered Users

Enter 1 or 2 or 3 or 4:
''')
    
if choice == "1":
    applications = []
    for userId in data:
        application = data[userId]
        if "applied" in application and application['applied'] != []:
            application["id"] = userId
            applications.append(application)

    for application in applications:
        name = application['name']
        resume = application['resume']
        email = application['email']
        phone = application['contactNumber']
        college = application['college']
        course = application['course']
        year = application['yearOfStudy'] + " Year"
        userId = application['id']
        keys = application['applied']
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
    applications = []
    for userId in data:
        application = data[userId]
        if "name" in application and "resume" in application:
            application["id"] = userId
            applications.append(application)
            
    os.system('cls' if os.name == 'nt' else 'clear')
    for application in applications:
        name = application['name']
        userId = application['id']
        # check if application has key 'resume'
        if 'resume' in application:
            name = application['name']
            resume = application['resume']
            email = application['email']
            phone = application['contactNumber']
            college = application['college']
            course = application['course']
            year = application['yearOfStudy'] + " Year"
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
        else:
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
                                                                
       This user profile is missing Resume information.
            ''')
            print("User ID: " + userId)
            print("Name: " + name)
            input("Press Enter to exit...")
if choice == "3":
    applications = []
    for userId in data:
        application = data[userId]
        if "name" not in application and "resume" in application:
            print(application)
            application["id"] = userId
            applications.append(application)
    os.system('cls' if os.name == 'nt' else 'clear')
    for application in applications:
        try:
            resume = application['resume']
            userId = application['id']
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

if choice == "4":
    os.system('cls' if os.name == 'nt' else 'clear')
    # need the show the total number of registered users
    print("Total number of registered users: " + str(len(data)))
    input("Press Enter to exit...")

if choice == "1" or choice == "2" or choice == "3":
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