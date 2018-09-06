using System;

namespace NinjaSamuraiWizard
{
    class Program
    {
        static void Main(string[] args)
        {
            Wizard Cory = new Wizard("Cory");
            Wizard Cody = new Wizard("Cody");
            Samurai Adrial = new Samurai("Adrial");
            Samurai Nha = new Samurai("Nha");
            Samurai Jake = new Samurai("Jake");
            Ninja Drew = new Ninja("Drew");

            Cody.Info();
            Cory.Fireball(Cody);
            Cody.Info();
            Cody.Heal();
            Cody.Info();
            Drew.Info();
            Drew.Steal(Cory);
            Cory.Info();
            Drew.Info();
            Drew.Get_away();
            Drew.Info();
            Adrial.Info();
            Adrial.Death_Blow(Cory);
            Cory.Info();
            for(int i = 0; i < 5; i++)
            {
                Cody.attack(Adrial);
            }
            Adrial.Info();
            Adrial.Meditate();
            Adrial.Info();
            Console.WriteLine($"We have created {Samurai.How_Many()} Samurai's");
        }
    }

}
