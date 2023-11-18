import pandas as pd

"""
Open source UIUC course catalog dataset

See https://github.com/wadefagen/datasets/tree/master/course-catalog
"""
BASE_URL = 'https://raw.githubusercontent.com/wadefagen/datasets/master/course-catalog/data'

"""
We will look at the last 2 years of offered classes
"""
TERMS = [
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

def process_df(df):
    df = df[df['Subject'] == 'CS']
    df = df[['Subject', 'Number', 'Name', 'Description', 'Credit Hours']]
    df = df.drop_duplicates(subset=['Subject', 'Number'], keep='last')
    df = df.sort_values(by=['Number'])
    return df

# def get_courses_df():
#     csv_urls = construct_csv_urls()
#     df = pd.DataFrame(columns=['Subject', 'Number', 'Name', 'Description', 'Credit Hours'])
#     for url in csv_urls:
#         sub_df = pd.read_csv(url)
#         sub_df = process_df(sub_df)
#         df = pd.concat([df, sub_df])
#     df = process_df(df)
#     return df

def get_courses_df():
    csv_urls = construct_csv_urls()
    df = pd.DataFrame(columns=['Subject', 'Number', 'Name', 'Description', 'Credit Hours'])
    for url in csv_urls:
        sub_df = pd.read_csv(url)
        sub_df = process_df(sub_df)
        df = pd.concat([df, sub_df])
    # df = df.sort_values('YearTerm').drop_duplicates(subset=['Subject', 'Number'], keep='last')
    # df = df.drop(columns='YearTerm')  # Drop term column if not needed
    df = process_df(df)
    return df

def main():
    df = get_courses_df()
    df.to_csv("courses.csv", index=False)

if __name__ == "__main__":
    main()