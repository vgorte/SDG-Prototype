# Fischer's exact test for significance analysis between categories?

#H0- The variables are independent -> no relationship between the two categorical variables
#H1- Variables are dependent -> Relation between the categorical variables

library(readr)
data = read_csv(
  file = "study_data_preprocessed.csv",
  col_names = TRUE,
)



a= fisher.test(
  table(data$Subjective_Worst, data$BG_Gender) / 4,
  conf.int=TRUE,
  
)

a
str(a)


data$Task_Type == "Trend"

mean(data[data$Task_Type == "Distribution",]$Time_Needed_Mean)

summary(data$Time_Needed_Mean)
