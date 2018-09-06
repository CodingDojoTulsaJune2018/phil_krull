namespace NinjaSamuraiWizard
{
    class Samurai:Human
    {
        private static int count = 0;
        // Samurai should have a default health of 200
        public Samurai(string name):base(name)
        {
            health = 200;
            count++;
        }
        // Samurai should have a method called death_blow, which when invoked should attack an object and decreases its health to 0 if it has less than 50 health
        public void Death_Blow(Human opponent)
        {
            attack(opponent);
            if(opponent.health < 50)
            {
                opponent.health = 0;
            }
        }
        // Samurai should have a method called meditate, which when invoked, heals the Samurai back to full health
        public void Meditate()
        {
            health = 200;
        }
        // (Optional) Samurai should have a class method called how_many, which when invoked, displays how many Samurai there are. Hint you may have to use the static keyword
        public static int How_Many()
        {
            return count;
        }
    }
}