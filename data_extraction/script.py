import firebase_admin
from firebase_admin import credentials, firestore
import csv
import os 

# clear the terminal
os.system('cls' if os.name == 'nt' else 'clear')

print('''
 /$$$$$$$$          /$$               /$$       /$$                              /$$$  
| $$_____/         | $$              | $$      |__/                             |_  $$ 
| $$     /$$$$$$  /$$$$$$    /$$$$$$$| $$$$$$$  /$$ /$$$$$$$   /$$$$$$        /$$ \  $$
| $$$$$ /$$__  $$|_  $$_/   /$$_____/| $$__  $$| $$| $$__  $$ /$$__  $$      |__/  | $$
| $$__/| $$$$$$$$  | $$    | $$      | $$  \ $$| $$| $$  \ $$| $$  \ $$            | $$
| $$   | $$_____/  | $$ /$$| $$      | $$  | $$| $$| $$  | $$| $$  | $$       /$$  /$$/
| $$   |  $$$$$$$  |  $$$$/|  $$$$$$$| $$  | $$| $$| $$  | $$|  $$$$$$$      |__//$$$/ 
|__/    \_______/   \___/   \_______/|__/  |__/|__/|__/  |__/ \____  $$         |___/  
                                                              /$$  \ $$                
                                                             |  $$$$$$/                
                                                              \______/                 
    Please sit back and relax while we extract the data from the database. This may take a while.                                                                                  
''')

cred = credentials.Certificate("ignite-auth-firebase-adminsdk-lnu76-fbed9fe5aa.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
# Reference to the applications collection
applications_ref = db.collection('applications')

# Get all documents in the applications collection
applications = applications_ref.get()

# Process each document
rows = []
for application in applications:
    # Get the document ID and data
    doc_id = application.id
    doc_data = application.to_dict()
    profile = doc_data['profile']
    doc_data.pop('profile')
    doc_data.update(profile)
    
    rows.append(doc_data)

with open('applications.csv', 'w', newline='') as csvfile:
    # Define fieldnames based on keys of first dictionary
    fieldnames = rows[0].keys()
    # Create CSV writer
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    # Write header row
    writer.writeheader()

    # Write data rows
    for row in rows:
        writer.writerow(row)

    # close the file
    csvfile.close()

# clear the terminal
os.system('cls' if os.name == 'nt' else 'clear')

print('''
 /$$$$$$$                                         /$                                   /$   
| $$__  $$                                       /$$$                                 /$$$  
| $$  \ $$  /$$$$$$  /$$$$$$$   /$$$$$$         /$$ $$                               /$$ $$ 
| $$  | $$ /$$__  $$| $$__  $$ /$$__  $$       /$$\  $$                             /$$\  $$
| $$  | $$| $$  \ $$| $$  \ $$| $$$$$$$$      |__/ \__/                            |__/ \__/
| $$  | $$| $$  | $$| $$  | $$| $$_____/                                                    
| $$$$$$$/|  $$$$$$/| $$  | $$|  $$$$$$$                                                    
|_______/  \______/ |__/  |__/ \_______/                      /$$$$$$ /$$$$$$               
                                                             |______/|______/               
                                                                                            
                                                                                                          
    File generated as applications.csv .                                                                                  
''')