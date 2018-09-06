using System;

namespace NinjaSamuraiWizard
{
    public class Wizard:Human
    {

        // Wizard should have a default health of 50 and intelligence of 25
        public Wizard(string name) : base(name, 3, 25, 3, 50) {}
        // Wizard should have a method called heal, which when invoked, heals the Wizard by 10 * intelligence
        public void Heal()
        {
            health = health * intelligence;
        }
        // Wizard should have a method called fireball, which when invoked, decreases the health of whichever object it attacked by some random integer between 20 and 50
        public void Fireball(Human opponent)
        {
            Random rnd = new Random();
            int damage = rnd.Next(20, 31);

            opponent.health = opponent.health - damage;
        }
    }
}