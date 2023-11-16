# import pandas as pd

# def main():
#     # Read the CSV files
#     courses_df = pd.read_csv('courses.csv')
#     instructors_df = pd.read_csv('instructors.csv')

#     # Merge the dataframes on 'Subject' and 'Number'
#     merged_df = pd.merge(courses_df, instructors_df, on=['Subject', 'Number'])

#     # # Write the merged dataframe to a new CSV file
#     # merged_df.to_csv('aggregated.csv', index=False)

#     # Split the 'Instructors' field into an array of strings
#     merged_df['Instructors'] = merged_df['Instructors'].str.split(';')
#     # Remove trailing period in 'Credit Hours' column
#     merged_df['Credit Hours'] = merged_df['Credit Hours'].str.rstrip('.')

#     json_str = merged_df \
#         .rename(columns={'Subject': 'subjectCode', 'Number': 'courseNumber', 'Name': 'title', 'Description': 'description', 'Credit Hours': 'creditHoursStr', 'Instructors': 'instructors'}) \
#         .to_json(orient='records', )
#     # Write the JSON string to a TypeScript file
#     interface_str = '''
#     export interface Course {
#     subjectCode: string;
#     courseNumber: number;
#     title: string;
#     description: string;
#     creditHoursStr: string;
#     instructors: Array<string>;
#     }
#     '''
#     with open('aggregated.ts', 'w') as f:
#         f.write(f'{interface_str}\nexport const courses: Array<Course> = {json_str};')

# if __name__ == "__main__":
#     main()



import pandas as pd
import json

def main():
    # Read the CSV files
    courses_df = pd.read_csv('courses.csv')
    instructors_df = pd.read_csv('instructors.csv')

    # Merge the dataframes on 'Subject' and 'Number'
    merged_df = pd.merge(courses_df, instructors_df, on=['Subject', 'Number'])

    # Split the 'Instructors' field into an array of strings
    merged_df['Instructors'] = merged_df['Instructors'].str.split(';')
    # Remove trailing period in 'Credit Hours' column
    merged_df['Credit Hours'] = merged_df['Credit Hours'].str.rstrip('.')

    # Add new fields with default values
    merged_df['difficulty'] = 69
    merged_df['reviews'] = 69
    merged_df['avgGPA'] = 69
    merged_df['Rating'] = 69

    # Convert DataFrame to JSON string with formatting
    json_str = json.dumps(
        merged_df.rename(columns={
            'Subject': 'subjectCode', 
            'Number': 'courseNumber', 
            'Name': 'title', 
            'Description': 'description', 
            'Credit Hours': 'creditHoursStr', 
            'Instructors': 'instructors'
        }).to_dict(orient='records'), 
        indent=2  # Add indentation for formatting
    )

    # Updated interface with new fields
    interface_str = '''
    export interface Course {
        subjectCode: string;
        courseNumber: number;
        title: string;
        description: string;
        creditHoursStr: string;
        instructors: Array<string>;
        difficulty: number;
        reviews: number;
        avgGPA: number;
        Rating: number;
    }
    '''
    with open('aggregated.ts', 'w') as f:
        f.write(f'{interface_str}\nexport const courses: Array<Course> = {json_str};')

if __name__ == "__main__":
    main()
