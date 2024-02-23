import random

Player = 0
CPU = 0

def player_choice() :
    user_choice = input("Pick an option between Rock, Paper or Scissors : ")
    if user_choice in ["Rock", "rock", "R", "r"]:
        user_choice == "r"
    elif user_choice in ["Paper", "paper", "P", "p"]:
        user_choice == "p"
    elif user_choice in ["Scissors", "scissors", "S", "s"]:
        user_choice == "s"
    else:
        print("Incorrect choice, try again")
        player_choice()
    return user_choice

def cpu_choice():
    comp_choice = random.randint(1,3)
    if comp_choice == 1:
        comp_choice = "r"
    elif comp_choice == 2:
        comp_choice = "p"
    else:
        comp_choice = "s"
    return comp_choice

while True:
    user_choice = player_choice()
    comp_choice = cpu_choice()

    if user_choice == "r":
        if comp_choice == "r":
            print("Player (Rock) : CPU (Rock)")