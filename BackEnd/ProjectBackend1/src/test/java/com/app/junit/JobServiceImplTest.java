package com.app.junit;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.IFreelancerDao;
import com.app.dao.IJobDao;
import com.app.dao.IRecruiterDao;
import com.app.dto.JobDTO;
import com.app.entites.Job;
import com.app.entites.Recruiter;
import com.app.exceptions.InvalidJobException;
import com.app.serviceimpl.JobServiceImpl;

@SpringBootTest
public class JobServiceImplTest {

    @Mock
    private IJobDao jobDao;

    @Mock
    private IFreelancerDao freelancerDao;

    @Mock
    private IRecruiterDao recruiterDao;

    @InjectMocks
    private JobServiceImpl jobService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetJobsByRecruiterId() {
        Long recruiterId = 1L;
        List<Job> jobs = new ArrayList<>();
        when(jobDao.findByPostedBy_IdAndActive(recruiterId, true)).thenReturn(jobs);

        List<Job> result = jobService.getJobsByRecruiterId(recruiterId);

        assertEquals(jobs, result);
    }

    @Test
    public void testCloseJob() {
        Long jobId = 1L;
        Job job = new Job();
        job.setActive(true);
        when(jobDao.existsById(jobId)).thenReturn(true);
        when(jobDao.findById(jobId)).thenReturn(Optional.of(job));

        jobService.close(jobId);

        assertFalse(job.getActive());
        verify(jobDao, times(1)).save(job);
    }

    
    @Test
    public void testFindById() {
        Long jobId = 1L;
        Job job = new Job();
        when(jobDao.existsById(jobId)).thenReturn(true);
        when(jobDao.findById(jobId)).thenReturn(Optional.of(job));

        Job result = jobService.findById(jobId);

        assertEquals(job, result);
    }

    @Test
    public void testFindByIdWithInvalidId() {
        Long jobId = 1L;
        when(jobDao.existsById(jobId)).thenReturn(false);

        assertThrows(InvalidJobException.class, () -> jobService.findById(jobId));
    }

    @Test
    public void testPostJob() {
        Long recruiterId = 1L;
        JobDTO jobDTO = new JobDTO();
        jobDTO.setRecruiterId(recruiterId);
        Recruiter recruiter = new Recruiter();
        when(recruiterDao.findById(recruiterId)).thenReturn(Optional.of(recruiter));
        when(jobDao.save(any(Job.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Job result = jobService.postJob(jobDTO);

        assertEquals(recruiter, result.getPostedBy());
        assertTrue(result.getActive());
    }

    @Test
    public void testPostJobWithInvalidRecruiter() {
        Long recruiterId = 1L;
        JobDTO jobDTO = new JobDTO();
        jobDTO.setRecruiterId(recruiterId);
        when(recruiterDao.findById(recruiterId)).thenReturn(Optional.empty());

        assertThrows(InvalidJobException.class, () -> jobService.postJob(jobDTO));
    }

    @Test
    public void testFindAll() {
        List<Job> jobs = new ArrayList<>();
        when(jobDao.findByActive(true)).thenReturn(jobs);

        List<Job> result = jobService.findAll();

        assertEquals(jobs, result);
    }

    // Add more test cases for your methods as needed

}
