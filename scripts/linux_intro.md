************************************
Cheaha Training Fundamentals
************************************

**Prerequisites**

- Valid Cheaha account
- Laptop connected to the AU wireless network
- Secure shell client, with connection settings for Hopper:
- Linux and Mac OS users use your favorite terminal app
- PuTTY (putty.org) is recommended for Window users

**References**

- `Lynda.com <http://lynda.com>`_
- `linux.org Tutorials <https://www.linux.org/forums/linux-beginner-tutorials.123/>`_

**Lab Overview**

- Getting Started & Basic Linux Commands
- Research Software
- Job Submission
- Job Scheduling
- Cluster Best Practices \ Tips & Tricks

######################################
Getting Started & Basic Linux Commands
######################################

Reminder: command syntax is:

.. code-block:: console
  
   $ <command> <required> [optional]


The dollar sign ($) is a symbol for the command prompt, which is a way for Linux to tell you it
is ready to accept a command. You do not need to type the first $ you see for each command.
Wherever you see $, you should enter the command that immediately follows it.
Windows users can use a terminal emulation program like SecureCRT or PuTTY. To connect,
you will create a new server profile for easley.auburn.edu, using your normal AU username and
password for the login credentials.

If you are using a terminal program, you can simply type: 

.. code-block:: console
   
   $ ssh blazerid@cheaha.rc.uab.edu

Issue the following commands and take note of what you see on the screen, the output… 

.. code-block:: console

   $ pwd 

To find out more about any command, including the one that you just ran (pwd) you can refer to
the Linux manual pages using the man command. 

.. code-block:: console

   $ man pwd

As seen there, pwd stands for “present working directory.” When you run it, you should see
something like /home/username on the screen, because that is the folder\directory in which you
are currently working. 

There are some tricks to navigating the man pages...

.. admonition:: Linux Page Navigation (man, more, less)

   | [DOWN ARROW] To scroll down a line, hit the down arrow
   | [UP ARROW] To up down a line, hit the up arrow.
   | [SPACE] To scroll down a page, hit the space bar.
   | [CTRL-U] To scroll up a page, hit ctrl-u
   | [Q] To exit, type q
   | [SHIFT-G] Scroll to end
   | [0][G] Scroll to top

.. code-block:: console
   
   $ man ls 

Notice there is more information than will fit on one screen. Use the arrow keys and shortcuts to
move around in the manual page.
Now let’s move around in the Linux file system…

.. code-block:: console
  
   $ cd
   $ pwd
   $ cd /tmp
   $ pwd
   $ cd ~
   $ pwd

cd stands for change directory (folder). If you issue cd without anything else, it does nothing. If
you give it a path (like /tmp), it will take you to a different directory in the file system.
The last command uses the special character “~” (tilde) which Linux translates to your home
directory. You should see the path to your home directory on the screen after issuing the last
command in this section.
So, now you have practiced moving around the file system and finding where you are.


Enter the following commands..

.. code-block:: console
   
   $ ls
   $ mkdir training
   $ ls -al
   $ cd training
   $ pwd
   $ echo “hello world” > hello.txt
   $ ls -al
   $ cat hello.txt

In this section, you created and accessed a new directory, created a file with redirection (>) and
viewed its contents. 

.. code-block:: console
  
   $ echo “hello again” > hello2.txt
   $ ls -al
   $ cat hello2.txt
   $ echo “hello world” >> hello.txt
   $ cat hello.txt
   $ echo “hello world” > hello.txt
   $ cat hello.txt
   $ ls -al > files.txt
   $ cat files.txt

Here, we created yet another file with different content using output redirection (>). Then, we
appended to the file using the append operation (>>).
Next, we overwrote our changes by going back to the single > operator which demonstrates that
output redirection can be destructive!
Finally, we redirected the output of our “ls -al” command to a file. This demonstrates that we
can create files from programs and commands we run.
Let’s take a look at who we are and what groups we are members of on the system.

.. code-block:: console

   $id

Here you can see your username and groups along with the numeric IDs that Linux assigns to
each.

Now let's look at our files...

.. code-block:: console

   $ ls -al
   $ rm hello 2.txt
   $ ls -al
   $ groups
   $ chgrp research hello.txt
   $ ls -al
   $ chmod 750 hello.txt
   $ ls -al
   $ ls -al hello.txt

This group of commands used the rm command to delete a file. Then we used chmod and chgrp
to change the file ownerships and permissions.
Look back at the output of these commands and pay close attention to the changes when “ls -al”
is run. What changes do you see? What do they mean? 

.. code-block:: console
   
   $ cd ..
   $ pwd
   $ ls -al
   $ cd training
   $ pwd
   $ ls -al .
   $ ls -al ..
   $ cd .
   $ pwd

Here we perform a quick demonstration of the “.” and “..” special operators. 

Special File and Directory Characters
Double dots (..) tells Linux to look back into the directory “above” our current location.
A single dot (.) tells Linux we are talking about the current directory.
Files that begin with “.” are hidden files in Linux

As you can see, “cd ..” takes us back up to our home directory, while cd “.” doesn’t take us
anywhere. You can also see . and .. in your directory listing when you run “ls -al”
Now you are ready to do some shell scripting… 

.. code-block:: console
   
   $ nano myscript.sh

You should see a drastic change to your screen! This command has launched the “nano” file
editor.
Here we can enter the contents of a file, much like a word processor or notepad application in a
desktop environment like Windows.
Let’s create a small program that we can run using nano. Enter the following lines in your nano
window 

.. admonition:: GNU Nano 2.0.6
   :class: terminal

   | #!/bin/bash
   | echo "Hello World!”
   |

   .. table:: 
      :class: terminal

      +-------------+-------------+--------------+--------------+------------+------------+
      | ^G Get Help | ^O WriteOut | ^R Read File | ^Y Prev Page | ^K CutText | ^C Cur Pos |
      +-------------+-------------+--------------+--------------+------------+------------+
      | ^X exit     | ^J Justify  | ^W Where Is  | ^V Next Page | ^U UnCutTx | ^T ToSpell |
      +-------------+-------------+--------------+--------------+------------+------------+


Then enter CTRL-X. At the bottom of the screen nano will ask you if you want to save the file.
Type Y.
Then, nano will ask you what you want to name the file. Nano will suggest the file name we
provided when we ran the command. Just hit enter since we already told nano what we wanted
to call the file when we entered the nano command above. 

.. code-block:: console

   $ ls -al
   $ chmod 750 myscript.sh
   $ ls -al
   $ ./myscript.sh

Now we have created a bash script! But we can’t actually run the script until we grant file
“execute” privileges. 

.. code-block:: console
 
   $ chmod 750 myscript.sh


Then, we run the script with “./myscript.sh”. The “./“ tells Linux that the file we want to run is
in the current directory.
Does your script work? Is the output what you expected? 

Extra Practice
**************

Take a look at the following shell script. What do you think this script will do? Try creating the
shell script using nano (be sure use a different file name this time) and see if you get the expected
result. 

.. admonition:: GNU Nano 2.0.6
   :class: terminal

   | #!/bin/bash
   | x=0
   | while [ $x -lt 10 ]
   |   do
   |     echo "$x: Hello World!”
   |     ((x+=1))
   |   done
   |

   .. table::
      :class: terminal

      +-------------+-------------+--------------+--------------+------------+------------+
      | ^G Get Help | ^O WriteOut | ^R Read File | ^Y Prev Page | ^K CutText | ^C Cur Pos |
      +-------------+-------------+--------------+--------------+------------+------------+
      | ^X exit     | ^J Justify  | ^W Where Is  | ^V Next Page | ^U UnCutTx | ^T ToSpell |
      +-------------+-------------+--------------+--------------+------------+------------+

##############
Job Scheduling 
##############

On Cheaha, Slurm serves as the scheduler and workload manager. 

The Slurm scheduler groups nodes into logical groups called 'partitions'. This is similar to queues in Torque/Moab, but with added functionality. Use the '-p' option to specify a partition in a job sub.

The general partition is available to all Easley users. Nodes in the general partition consist of standard nodes as defined in the Easley User Guide. This is by far the largest partition. If no partition is specified in the job sub, the general partition will be used. Jobs submitted to the general partition may be preempted.

There is also a partition for each PI lab group. Every user in the Easley cluster is sponsored by a PI that purchased capacity in the cluster. When the PI approves a user's account request, that user is automatically put in that PI's lab group. Membership in a lab group allows access to the group's corresponding partition. Use the 'sinfo' command to view available partitions.

.. code-block:: console

   $ sinfo
   
Note: The partition used in this lab ( hpcadmin_std ) is available only for this lab and should not be used otherwise. 

Specifying a group partition in job submission has advantages and disadvantages that the user must weigh. The disadvantage is that it restricts the job to only that capacity purchased by the PI. This is a small subset of the capacity in the general partition. The advantage is that it gives priority access to the group's capacity using preemption. If jobs are running on the group's capacity that do not belong to the group, they will be preempted. This is similar to how reservations work in the Hopper cluster.

The preemptible job will be allowed to run for one hour before being preempted. This is slightly different from the Hopper cluster where preemptible jobs run for an hour after the preempting job is submitted. Once preempted, the job will be requeued and will run once resources become available.


##############
Job Submission 
##############

Let’s use srun to run your program in interactive mode. This will run your program as a job on
one of the compute nodes, but will allow us to issue commands to the node interactively.

.. code-block:: console
   
   $ srun -p hpcadmin_std -N1 -n2 --pty /bin/bash
   $ module load openmpi/gcc
   $ mpirun ~/prime/prime
   $ exit

Finally, submit your job as a batch job to the cluster requesting two processors ( -n2 ) from a single node ( -N1 ) in the hpcadmin_std partition.

.. code-block:: console
   
   $ sbatch -p hpcadmin_std -N1 -n2 ~/prime/prime.sh

What happened? Did the job run successfully?
Here's the prime.sh script: 

.. code-block:: console
   
   $ mpirun prime > Prime.out

Anything missing?

Here are some other important sub parameters by example (man sbatch for more details): 

.. code-block:: console
   
   $ sbatch -p hpcadmin_std -N1 -t4:00:00 --mail-type=begin,end,fail --mail-user=nosuer@auburn.edu prime.sh
   
The '-t' parameter is the walltime. As you run your program, you should get a good idea how long it will run. This is the walltime. Providing this in the job sub allows the scheduling to make better decisions and run more efficiently. The default walltime if none is specified is two days.   
   
How to monitor your job: 

.. code-block:: console
   
   $ squeue -u <userid>
   $ scontrol show job <jobid>

How to cancel a job: 

.. code-block:: console
   
   $ scancel job <jobid>       # cancel job by jobid
   $ scancel job -u username   # cancel all jobs by username


##########
Next Steps 
##########


You can add sbatch options to your shell script. This saves time and lots of typing when you have
to specify lots of options
For example, you can run prime using a Slurm script: prime.sh… 

.. code-block:: console
   
   #!/bin/bash
   email=`whoami`@auburn.edu
   workdir=/home/`whoami`/prime
   cd $workdir
   #SBATCH -J "Prime"
   #SBATCH --mail-type=ALL 
   #SBATCH --mail-user=$email
   #SBATCH --nodes=1
   #SBATCH --ntasks=48
   #SBATCH --partition=general
   #SBATCH -d $workdir
  
   module load openmpi/gcc
   mpirun prime 


Notice the #SBATCH directives in this script are equivalent to some of the sbatch options that you have
specified on the command line.
Find software for your particular research domain and begin experimenting. We have many
popular software packages available for use. You can see them with … 

.. code-block:: console

   $ module avail

If a software package that you would like to use is not already available, email
support@listserv.uab.edu to request a new package.
The best way to learn your way around is with hands-on experience. If you run into any
problems or have questions, email support@listserv.uab.edu. 


Best Practices Summary 
**********************

1. Running a new program for the first time:

- First, run *briefly* on login node just to make sure that your code will run. If the program runs without an immediate indication or an error or problem, use CTRL-C to exit.
- Then, run using srun in interactive mode to make sure that it will run on a compute node.
- Finally, run in batch mode using sbatch. 

.. Caution :: Do not run jobs on the login node except as a test. This means short jobs using small amounts of memory to ensure that your code will run. Processes that violate this will be killed.

2. Don’t submit a job, assume it’s running correctly and walk away or leave for weekend. Make
sure the job is running and, if not, understand why not.

3. Specify walltimes in your job submission.

- Allows Scheduler to maximize utilization which means your jobs run sooner. 
- Users should receive an email after a job completes that contains the actual walltime. 
- Submit short-running jobs with fewer resources in order to reduce likelihood of preemption when not using your group’s partition.

4. Clean up when your jobs are finished.

- Easley does not provide archival or long-term storage.
- If files no longer need to be available for work on the system, copy them off and delete them so that the space can be used for active projects.

5. Pay attention to your disk usage. Once the hard limit is reached in disk space or # of files, your program will stop executing.

6. Do not share passwords or accounts. If you want others to access your files, then set them to read only. 

###############
How to Get Help 
###############

Because Cheaha is regarded as a research (rather than production) system, HPC support is
normally available only during regular business hours. When reporting problems, please provide
as much relevant information as possible. This should include the following, as appropriate:

- date and time when the problem occurred
- job number
- text of the command(s) which you issued
- exact and complete text of any error messages
- any other information helpful in identifying or resolving the problem

If further assistance is needed, please email to schedule an appointment with one of the HPC
admins at support@listserv.uab.edu. 
