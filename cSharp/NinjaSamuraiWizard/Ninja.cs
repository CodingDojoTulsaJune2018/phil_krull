namespace NinjaSamuraiWizard
{
    class Ninja:Human
    {
        // Ninja should have a default dexterity of 175
        public Ninja(string name):base(name)
        {
            dexterity = 175;
        }
        // Ninja should have a steal method, which when invoked, attacks an object and increases the Ninjas health by 10
        public void Steal(Human opponent)
        {
            attack(opponent);
            health += 10;
        }
        // Ninja should have a get_away method, which when invoked, decreases its health by 15
        public void Get_away()
        {
            health -= 15;
        }
    }
}