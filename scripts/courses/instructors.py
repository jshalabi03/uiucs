"""
This script reads course catalog data and extracts
professors for all previous sections of CS courses at UIUC
"""

import pandas as pd

"""
Open source UIUC course catalog dataset

See https://github.com/wadefagen/datasets/tree/master/course-catalog
"""
BASE_URL = 'https://raw.githubusercontent.com/wadefagen/datasets/master/course-catalog/data'

"""
Names of current terms available from wade's dataset

Must be hardcoded because names are arbitrary

NOTE: Update for future terms and rerun the scripts!
"""
TERMS = [
    '2016-fa',
    '2017-fa',
    '2017-sp',
    '2018-fa',
    '2018-sp',
    '2019-fa',
    '2019-sp',
    '2020-fa',
    '2020-sp',
    '2021-fall',
    '2021-sp',
    '2022-fa',
    '2022-sp',
    '2023-sp',
]

def construct_csv_urls():
    urls = []
    for term in TERMS:
        urls.append(f'{BASE_URL}/{term}.csv')
    return urls

def construct_csv_urls():
    urls = []
    for term in TERMS:
        urls.append(f'{BASE_URL}/{term}.csv')
    return urls

"""
Processes dataframe representing valid course catalog csv from dataset

Filters catalog to only CS courses, and aggregates professor data for each course
Returns dataframe with columns "Subject", "Number", "Instructors" where instructors
is a semi-colon delimited string of all instructors who have taught a section of the
course.
"""
def process_df(df):
    # Filter out CS courses
    cs_courses = df[df['Subject'] == 'CS']

    # Convert 'Instructors' to string and replace NaN with empty strings
    cs_courses['Instructors'] = cs_courses['Instructors'].fillna('').astype(str)

    # Split 'Instructors' based on semicolons and strip whitespace
    cs_courses['Instructors'] = cs_courses['Instructors'].str.split(';').apply(lambda x: [i.strip() for i in x])

    # Explode 'Instructors' to separate rows
    unique_instructors = cs_courses.explode('Instructors')

    # Remove invalid instructors
    unique_instructors = unique_instructors[unique_instructors['Instructors'] != '']
    unique_instructors = unique_instructors[unique_instructors['Instructors'] != 'nan']

    # Group by course and aggregate instructors
    grouped = unique_instructors.groupby(['Subject', 'Number'])
    aggregated = grouped.agg(lambda x: ';'.join(sorted(set(x))))

    aggregated_reset = aggregated.reset_index()

    return aggregated_reset[['Subject', 'Number', 'Instructors']]

def get_instructors_dataframe():
    CSV_URLS = construct_csv_urls()
    df = pd.DataFrame(columns=['Subject', 'Number', 'Instructors'])
    for url in CSV_URLS:
        sub_df = pd.read_csv(url)
        sub_df = process_df(sub_df)
        df = pd.concat([df, sub_df])
    df = process_df(df)
    return df

def main():
    df = get_instructors_dataframe()
    df.to_csv("instructors.csv", index=False)

if __name__ == "__main__":
    main()