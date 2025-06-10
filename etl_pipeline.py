import pandas as pd

# Extract
print("🔁 Loading data...")
df = pd.read_csv("sample_data.csv")

# Transform
print("🔁 Transforming data...")
df.columns = [col.strip().lower().replace(" ", "_") for col in df.columns]
df = df.dropna()  # Removing missing rows
df['processed'] = True  # Add new column

# Load
output_path = "transformed_data.csv"
df.to_csv(output_path, index=False)

print(f"✅ ETL Complete! Data saved to {output_path}")
